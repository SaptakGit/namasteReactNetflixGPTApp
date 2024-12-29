import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utlis/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from "../utlis/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utlis/constants";
import { toggleGptSearchView } from "../utlis/gptSlice";
import { changeLanguage } from "../utlis/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  const haldleSignOut = () => {
    signOut(auth)
    .then(() => {})
    .catch((error) => {});
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid, email, displayName, photoURL} = user;
        dispatch(
          addUser({
            uid:uid, email:email, displayName:displayName, photoURL:photoURL
          })
        );
       
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmount.
    return () => unsubscribe();

  },[])

  const handleGptSearchClick = () => {
      // Toggle GPT Search
      dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) =>{
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
      <img className='w-36 mx-auto md:mx-0' src={LOGO} alt="logo-img"/>
      {user && (
        <div className='flex p-2'>
          {showGptSearch && (
            <select className='p-2 bg-gray-800 text-white m-2 rounded-md' onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                )
              )}
            </select>
          )}
        <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg' onClick={handleGptSearchClick}>{showGptSearch ? "Browse" : "GPT Search"}</button>
        <img alt="user-icon" className='hidden md:block h-5 w-auto' src={user.photoURL} />
        <button onClick={haldleSignOut} className='font-bold text-white'>(Sign Out)</button>
      </div>
    )}
    </div>
  )
}

export default Header

