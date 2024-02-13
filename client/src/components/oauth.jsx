import React from "react";
import { GoogleAuthProvider } from "@firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth"; 
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"

import { signInSuccess } from "../redux/user/userslice";
export default function Oauth() {
  const dispatch= useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google",{

     method : "POST",
     headers:{
        "Content-Type" :"application/json",

     },
     body: Json.stringify({name:result.user.displayName,email:result.user.email,photo:result.user.photoURL}),


      })
      const data = await res.json(); 
     dispatchEvent(signInSuccess(data));
     navigate("/")
    } catch (error) {
      console.log("not sign with google,error");
    }
  };

  return (
    <div
      onClick={handleGoogleClick}
      type="button"
      className="bg-red-700 text-white p-3 rounded-lg uppercase flex justify-center items-center cursor-pointer hover:placeholder-opacity-90"
    >
      Continue with Google
    </div>
  );
}
