import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Signin from "./pages/signin";
import Signout from "./pages/signout";
import About from "./pages/about";
import Header from "./components/header";
import Profile from "./pages/profile"; // Import the Profile component

export default function App() {
  return (
    <Router>
      <Header /> {/* Render the Header component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Sign-In" element={<Signin />} />
        <Route path="/Sign-Out" element={<Signout />} />
        <Route path="/Profile" element={<Profile />} /> {/* Use the Profile component */}
      </Routes>
    </Router>
  );
}
