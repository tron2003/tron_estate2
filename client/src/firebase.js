// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tronestate.firebaseapp.com",
  projectId: "tronestate",
  storageBucket: "tronestate.appspot.com",
  messagingSenderId: "865937578740",
  appId: "1:865937578740:web:5283458b92ad7c45019ca1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);