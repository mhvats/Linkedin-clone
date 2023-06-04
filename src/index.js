import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/Router";
// import {Profile} from './components/profile/Profile'
// import {App} from './App'
// import { Register } from "./components/login/Register";
// import { Login } from "./components/login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Profile /> */}
    <RouterProvider router={Router} />
  </React.StrictMode>
);
