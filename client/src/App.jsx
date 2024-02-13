import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Signin from "./pages/signin";
import Signout from "./pages/signout";
import About from "./pages/about";
import Header from "./components/header";
import PrivateRoute from "./components/privateroute";
import Profile from "./pages/profile"; // Import the Profile component
import Signup from "./pages/signup.jsx";

export default function App() {
  return (
    <Router>
      <Header /> {/* Render the Header component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        {/* Protected route for profile */}
        <PrivateRoute path="/profile" element={<Profile />} />
        <Route path="/sign-out" element={<Signout />} />
      </Routes>
    </Router>
  );
}
