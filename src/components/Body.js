import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utlis/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utlis/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    }
  ]);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
      } else {
        dispatch(removeUser());
      }
    });
  },[])
  

  return (
    <div>
        <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default Body