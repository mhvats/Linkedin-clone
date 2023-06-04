import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/header.js";
import Sidebar from "./components/sidebar/sidebar.js";
import Widget from "./components/widget/widget.js";
import FeedR from "./components/feed/FeedR.js";
import { auth } from "./components/feed/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        navigate("/register");
      }
    });
  }, []);
  return (
    <div className="app">
      {/* Header section */}
      <Header />
      {/* Sidebar */}
      <div className="section">
        <Sidebar />
        <FeedR />
        <Widget />
      </div>
    </div>
  );
};
