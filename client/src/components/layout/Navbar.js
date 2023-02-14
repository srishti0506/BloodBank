import React from "react";
import bdrop from "../../assets/img/bdrop.png";
import SearchPage from "./SearchPage";
import { Link, NavLink } from "react-router-dom";
import "../../assets/css/Navbar.css";

const Navbar = () => {
  return (
    <div className="siri">
    <nav className="nav">
      <NavLink exact to="/home">
        <img src={bdrop} alt="bdroplogo" />
      </NavLink>
      <NavLink exact to="/donate">DONATE</NavLink>
      <br></br> <br></br> <br></br>   <br></br> <br></br> <br></br>   <br></br> <br></br> <br></br>
      <NavLink extact to="/request">REQUEST</NavLink>
      <NavLink extact to="/reg/emp">EMPLOYEE REGISTER</NavLink>
      <NavLink extact to="/login/emp">EMPLOYEE LOGIN</NavLink>
      <NavLink extact to="/contact">CONTACT</NavLink>

      <br></br> <br></br>
      {/* <Search /> */}
      
      <SearchPage />
    </nav>
    </div>
  );
};

export default Navbar;




