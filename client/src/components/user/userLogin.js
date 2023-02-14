import React, { useState } from "react";
import Axios from "axios";

//css
import "../../assets/css/UserLogin.css";

const UserLogin = () => {
  const [userUserName, setuserUserName] = useState("");
  const [userPassword, setuserPassword] = useState("");

  const userLoginCheck = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login/usr", {
      userUserName: userUserName,
      userPassword: userPassword,
    }).then((response) => {
      if (response.data.message) {
        alert(response.data.message);
      } else {
        alert("WELCOME!");
        window.location = "/login/usr/dash";
      }
    });
  };

  return (
    <div className="user-login">
      <h2>USER LOGIN</h2>
      <form onSubmit={(e)=>userLoginCheck(e)}>
        <input className="form-control"
          name="username"
          type="text "
          placeholder="username"
          onChange={(e) => {
            setuserUserName(e.target.value);
          }}
          required
        />
        <input className="form-control"
          name="password"
          type="text "
          placeholder="password"
          onChange={(e) => {
            setuserPassword(e.target.value);
          }}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserLogin;
