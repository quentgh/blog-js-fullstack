import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/containers/NavBar/NavBar";
import Home from "./components/pages/Home/Home";
import Auth from "./components/pages/Auth/Auth";
import Profile from "./components/pages/Profile/Profile";
import UserProvider from "./components/contexts/UserContext";

function App() {

  return (
    <UserProvider>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </UserProvider>
  )
}

export default App;