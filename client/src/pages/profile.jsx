import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { getStorage, ref, uploadBytesResumable,getDownloadURL } from "firebase/storage";
import { app } from "../firebase"; // Assuming you have a firebase.js file where you initialize Firebase
//
export default function Profile() {
  const fileref = useRef(null);
  const { currentUser } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [FileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});

  // console.log(formData);
  // console.log(filePerc);
  // console.log(setFileUploadError);
  // useEffect to handle file upload when 'file' state changes
  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  // Function to handle file upload to Firebase Storage
  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
        console.error("File upload error:", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then
          ((downloadURL) => 
            setFormData({ ...formData, avatar: downloadURL })
          );
         
      }
    )
  };

  return (
    <div className="p-3 max-w-lg max-auto">
      <h1 className="text-3xl font-semibold text-center my-4">Profile</h1>
      <form className="flex flex-col gap-4">
        {/* File input */}
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileref}
          hidden
          accept="image/*"
        />
        {/* Profile image */}
        <img
          onClick={() => fileref.current.click()}
          src={formData.avatar|| currentUser.avatar}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center"
        />
        {/* Display upload status */}
        <p className="text-sm self-center">
          {FileUploadError && <span className="text-red-700">Error Image upload (Iamge should be less tham 2MB)</span>}
          {!FileUploadError && filePerc > 0 && filePerc < 100 && (
            <span className="text-slate-700">Uploading {filePerc}%</span>
          )}
          {filePerc === 100 && <span className="text-green-700">Image Successfully Uploaded!</span>}
        </p>
        {/* Username input */}
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="border p-3 rounded-lg"
        />
        {/* Email input */}
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="border p-3 rounded-lg"
        />
        {/* Password input */}
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="border p-3 rounded-lg"
        />
        {/* Update button */}
        <button className="bg-slate-700 rounded-lg p-3 hover:opacity-95 disabled:opacity-80">
          Update
        </button>
      </form>
      {/* Delete account and sign-in links */}
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign-In</span>
      </div>
    </div>
  );
          }