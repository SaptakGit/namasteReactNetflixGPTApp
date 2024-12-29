import React, { useRef, useState } from 'react'
import Header from './Header'
import checkValidData from '../utlis/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utlis/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from "../utlis/userSlice";
import { USER_AVATAR } from "../utlis/constants";
import { BG_URL } from "../utlis/constants"


const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    

    setErrorMessage(message);

    if(message) return;

    // Sign In/Sign Up Logic
    if(!isSignInForm){
      // Sign Up Logic
      console.log(name.current.value); 
      console.log(USER_AVATAR);
      
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // Update User
              updateProfile(user, {
                displayName: name.current.value, 
                photoURL: USER_AVATAR,
              })
              .then(() => {
                const {uid, email, displayName, photoURL} = auth.currentUser;
                dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
                
              }).catch((error) => {
                setErrorMessage(error.message);
              });

          
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });

    }else{
      // Sign In Logic

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });

    }

  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }


  return (
    <div>
      <Header />
      <div className='absolute '>
        <img className='h-screen object-cover md:h-auto' src={BG_URL} alt="bg-img"/>
      </div>
      <form 
        onSubmit={(e) => e.preventDefault} 
        className='w-full md:w-4/12 absolute px-16 md:p-12 bg-black my-36 md:mx-auto right-0 left-0 text-white py-4 rounded-lg bg-opacity-80 '>
      <h1 className='font-bold text-3xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
          <input 
            ref={name}
            type='text' 
            placeholder='Full Name' 
            className='p-4 my-4 w-full bg-gray-700 rounded-lg' 
          />
        )}
        <input 
          ref={email}
          type='text' 
          placeholder='Email Address' 
          className='p-4 my-4 w-full bg-gray-700 rounded-lg'
        />
        <input 
          ref={password}
          type='password' 
          placeholder='Password' 
          className='p-4 my-4 w-full bg-gray-700 rounded-lg'
        />
        <p className='text-red-500'>{errMessage}</p>
        <button 
          type='button'
          className='p-4 my-6 bg-red-700 w-full rounded-lg'
          onClick={handleButtonClick}>
            {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p 
          onClick={toggleSignInForm} 
          className='cursor-pointer'>
          { isSignInForm 
            ? "New to Netflix? Sign Up Now"
            : "Already Registered ? Sign In Now."
          }
        </p>
      </form>
    </div>
  )
}

export default Login