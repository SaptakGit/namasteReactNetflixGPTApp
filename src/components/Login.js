import React, { useRef, useState } from 'react'
import Header from './Header'
import checkValidData from '../utlis/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utlis/firebase';


const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrorMessage] = useState(null);

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
      
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
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
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg" alt="bg-img"/>
      </div>
      <form 
        onSubmit={(e) => e.preventDefault} 
        className='w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white py-4 rounded-lg bg-opacity-80 '>
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