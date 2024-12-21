// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ9mzH5340oFZ01Wc81OXzr4VhHcwPwi8",
  authDomain: "netflixgpt-a5fb8.firebaseapp.com",
  projectId: "netflixgpt-a5fb8",
  storageBucket: "netflixgpt-a5fb8.firebasestorage.app",
  messagingSenderId: "318981807216",
  appId: "1:318981807216:web:314d8887344f59f37768b5",
  measurementId: "G-NKD7LJEF9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();