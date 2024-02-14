import React from "react";
import {useSelector} from "react-redux"
export default function profile() {

  const {currentUser}=useSelector((state)=>state.user)
  return (
    <div className="p-3 max-w-lg max-auto">
      <h1 className="text-3xl font-semibold text-center my-74">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser?currentUser.avatar:""}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center"
        />
        <input
          type="text"
          placeholder="username" id = "username"
          className="border p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="email" id = "email"
          className="border p-3 rounded-lg"
        />
        <input
          type="text"
          placeholder="password" id = "password"
          className="border p-3 rounded-lg"
        />
        <button className="bg-slate-700 rounded-lg p-3 hover:opacity-95 disabled:opacity-80">Update</button>
      </form>
<div className="flex justify-between mt-5">
<span className="text-red-700 cursor-pointer">Delete Account</span> 
<span className= "text-red-700 cursor-pointer">Sign-In</span>

</div>

    </div>
  );
}

