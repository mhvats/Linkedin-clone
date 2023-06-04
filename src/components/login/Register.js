import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../feed/firebase";
import "./register.css";
import { useNavigate } from "react-router-dom";
export const Register = () => {
  const navigate = useNavigate();
  const [registerUsername, setRegisterUsername] = useState("");
  const [registorPassword, setRegistorPassword] = useState("");
  const [toggle, setToggle] = useState(false);
  const toggleCheck = toggle ? "Hide" : "Show";
  console.log(registerUsername);
  const handlePasswordToggle = () => {
    setToggle((prevState) => {
      return !prevState;
    });
  };
  const handleClick = async (e) => {
    e.preventDefault();
    setRegisterUsername("");
    setRegistorPassword("");
    if (!registerUsername) {
      alert("Please enter Email");
    }
    if (!registorPassword) {
      alert("Please enter Password");
    }
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerUsername,
        registorPassword
      );
      navigate('/login')
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
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
          {/* <br></br> */}
          <input
            type="email"
            value={registerUsername}
            onChange={(e) => {
              setRegisterUsername(e.target.value);
            }}
          ></input>
        </div>
        <div className="input-fields">
          <label>Password{"(6 or more characters)"}</label>
          {/* <br></br> */}
          <input
            type={toggle ? "text" : "password"}
            value={registorPassword}
            onChange={(e) => {
              setRegistorPassword(e.target.value);
            }}
          ></input>
          {registorPassword && (
            <p id="toggler" onClick={handlePasswordToggle}>
              {toggleCheck}
            </p>
          )}
        </div>
        <div className="policy-container">
          <p>
            By clicking Agree & Join, you agree to the Linkedin{" "}
            <span style={{ color: "blue" }}>
              User Agreement, Privacy Policy,
            </span>{" "}
            and
            <span style={{ color: "blue" }}> Cookie Policy</span>
          </p>
        </div>
        <div className="btn-container">
          <button onClick={handleClick}>Agree & Join</button>
        </div>
        <h5>
          <span>or</span>
        </h5>
      </div>
      {/* Closing of Input fields */}
      <div>
        Already a user?{" "}
        <span style={{ color: "blue", cursor: "pointer" }} onClick={()=> navigate("/")}>Sign In</span>
      </div>
    </div>
  );
};
