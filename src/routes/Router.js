import { createBrowserRouter } from "react-router-dom";
// import FeedR from "../components/feed/FeedR";
import { Register } from "../components/login/Register";
import { Login } from "../components/login/Login";
import { App } from "../App";
export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <App />,
  },
]);
