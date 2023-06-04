import "./login.css";
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../feed/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
export const Login = () => {
  const navigate = useNavigate();
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [toggle, setToggle] = useState(false);
  const toggleCheck = toggle ? "Hide" : "Show";
  const handlePasswordToggle = () => {
    setToggle((prevState) => {
      return !prevState;
    });
  };
  const handleClick = async (e) => {
    e.preventDefault();
    setLoginUsername("");
    setLoginPassword("");
    if (!loginUsername) {
      alert("Please enter Email");
    }
    if (!loginPassword) {
      alert("Please enter Password");
    }
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginUsername,
        loginPassword
      );
      navigate("/home");
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        navigate("/home");
      }
    });
  }, []);
  return (
    <div className="main-container">
      <div className="logo-container">
        <p id="linked">
          Linked<span id="in">in</span>
        </p>
      </div>
      <div className="tagline-container">
        <p>Make the most of your professional life</p>
      </div>
      {/* Input fields */}
      <div className="input-container">
        <div className="input-fields">
          <label>Email</label>
          <input
            type="email"
            value={loginUsername}
            onChange={(e) => {
              setLoginUsername(e.target.value);
            }}
          ></input>
        </div>
        <div className="input-fields">
          <label>Password</label>
          <input
            type={toggle ? "text" : "password"}
            value={loginPassword}
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
          ></input>
          {loginPassword && (
            <p id="toggler" onClick={handlePasswordToggle}>
              {toggleCheck}
            </p>
          )}
        </div>
        <div className="btn-container">
          <button onClick={handleClick}>Sign In</button>
        </div>
      </div>
      {/* Closing of Input fields */}
      <div>
        Not a user?{" "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => navigate("/register")}
        >
          Register
        </span>
        {" or "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          title="NOT CLICKABLE"
        >
          Forgot Password
        </span>
      </div>
    </div>
  );
};
