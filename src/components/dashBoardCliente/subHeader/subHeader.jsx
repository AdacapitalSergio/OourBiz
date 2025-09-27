import React, { useState, useRef, useContext } from "react";
import { FaPlus, FaSignOutAlt, FaUser } from "react-icons/fa";
import "./estiloSuHeader.css";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SubHeader({ username = "nome de utilizador", company = "Nome da empresa" }) {
  const [profilePic, setProfilePic] = useState(null);
  const fileInputRef = useRef(null);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePic(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="usercard-container">
      <div className="usercard-left">
        <div className="avatar-wrapper" onClick={handleAvatarClick}>
          {profilePic ? (
            <img src={profilePic} alt="Profile" className="avatar-img" />
          ) : (
            <div className="avatar"> <FaUser /> </div>
          )}
          <span className="avatar-plus">
            <FaPlus size={10} />
          </span>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>

        <div className="user-info-sub">
          <h2 className="username">Olá, {username}!</h2>
          <p className="company">{company}</p>
        </div>
      </div>

      <button className="logout-btn" onClick={handleLogout} >
        <FaSignOutAlt />
        <span>Terminar sessão</span>
      </button>
    </div>
  );
}
