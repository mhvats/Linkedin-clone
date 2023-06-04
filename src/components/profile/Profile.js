import { useState } from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";
export const Profile = () => {
  const navigate = useNavigate();
  const tagline = {
    fontSize: "1.5rem",
    fontWeight: "bold",
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [college, setCollege] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  // const [close, setClose] = useState(false);
  const handleClose = () => {
    // console.log(close)
    // setClose(prevState =>{
    //     return !prevState
    // });
    navigate("/home")
  };
  const handleCreateProfile= ()=>{
    if(!firstName || !lastName || !college || !city || !state){
      alert("Enter all details");
      return;
    }
    else{
      navigate("/home");
    }
    console.log("profile created");
  }
  return (
    <div className="profile-changer-container">
      <div className="close-button" onClick={handleClose}>
        x
      </div>
      <div className="basic-info-container">
        <div>
          <p style={tagline}>Basic Info</p>
        </div>
        <div className="input-container">
          <div className="input-fields width">
            <input
              placeholder="First name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="input-fields width">
            <input
              placeholder="last name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="education-container">
        <div>
          <p style={tagline}>Education</p>
        </div>
        <div className="input-container">
          <div className="input-fields width">
            <input
              placeholder="College"
              value={college}
              onChange={(e) => {
                setCollege(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="location-container">
        <div>
          <p style={tagline}>Location</p>
        </div>
        <div className="input-container">
          <div className="input-fields width">
            <input
              placeholder="City"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </div>
          <div className="input-fields width">
            <input
              placeholder="State"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="create-profile-container">
        <button onClick={handleCreateProfile}>Create Profile</button>
      </div>
    </div>
  );
};
