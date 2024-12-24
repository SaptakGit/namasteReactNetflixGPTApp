import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utlis/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from "../utlis/userSlice";
import { LOGO } from "../utlis/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);

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

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-36' src={LOGO} alt="logo-img"/>
      {user && <div className='flex p-2'>
        <img alt="user-icon" className='h-5 w-auto' src={user.photoURL} />
        <button onClick={haldleSignOut} className='font-bold text-white'>(Sign Out)</button>
      </div>}
    </div>
  )
}

export default Header

