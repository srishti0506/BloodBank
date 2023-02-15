import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import "../../assets/css/Welcome.css"


const WelcomeScreen = ({history}) => {
  
  return (
    <div className="welcome">
      <div className="welcomeHeader">
        <h1>Welcome To Blood Bank</h1>
        <p>Donate Blood. Save Life.</p>
      </div>
      <Link to={'/home'} className="welcomeLink">Welcome</Link>
    </div>
  );
};

export default WelcomeScreen;