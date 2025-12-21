// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqo84rt6vQDHDsjTnuJKCr1E9TBjzTlQ8",
  authDomain: "greenstore-web-app.firebaseapp.com",
  projectId: "greenstore-web-app",
  storageBucket: "greenstore-web-app.firebasestorage.app",
  messagingSenderId: "1003049164022",
  appId: "1:1003049164022:web:f443346802914f0ff160d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);