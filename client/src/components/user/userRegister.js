import React, { useState } from "react";
import axios from "axios";

//css
import "../../assets/css/UserRegister.css";

const UserRegister = () => {
  const [userUserName, setuserUsername] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [userFName, setuserFName] = useState("");
  const [userMail, setuserMail] = useState("");
  const [userPhone, setuserPhone] = useState("");
  const [userPlace, setuserPlace] = useState("");
  const [userAge, setuserAge] = useState("");
  const [userGender, setuserGender] = useState("");
  const [userBloodGroup, setuserBloodGroup] = useState("");

  const submituserRegister = (e) => {
    e.preventDefault();
    console.log("ujju");
    const regurl = "http://127.0.0.1:3001/reg/usr";
    const formData = {
      userFName: userFName,
      userAge: userAge,
      userGender: userGender,
      userBloodGroup: userBloodGroup,
      userPhone: userPhone,
      userMail: userMail,
      userPlace: userPlace,
      userUserName: userUserName,
      userPassword: userPassword,
    };
    console.log(formData);
    axios.post(regurl, formData).then((response) => {
      alert(response.data.message);
    }).catch((e) => {
      alert("Something went wrong");
    });
  };

  return (
    <div className="user-register">
      <h2>DONAR REGISTER</h2>
      <form className="userReg-form" onSubmit={(e)=>submituserRegister(e)}>
        <input className="form-control"
          name="userFName"
          type="text "
          placeholder="Full Name"
          value={userFName}
          onChange={(e) => {
            setuserFName(e.target.value);
          }}
          required
        />
        <input className="form-control"
          name="userAge"
          type="text "
          placeholder="Age"
          value={userAge}
          onChange={(e) => {
            setuserAge(e.target.value);
          }}
          required
        />
        <input className="form-control"
          name="userGender"
          type="text "
          placeholder="Gender(M/F)"
          value={userGender}
          onChange={(e) => {
            setuserGender(e.target.value);
          }}
          required
        />
        <input className="form-control"
          name="userBloodGroup"
          type="text "
          placeholder="Blood Group"
          value={userBloodGroup}
          onChange={(e) => {
            setuserBloodGroup(e.target.value);
          }}
          required
        />
        <input className="form-control"
          name="emailId"
          type="text"
          placeholder="Email Place"
          value={userMail}
          onChange={(e) => {
            setuserMail(e.target.value);
          }}
          required
        />
        <input className="form-control"
          name="userPhone"
          type="number"
          placeholder="Phone Number"
          value={userPhone}
          onChange={(e) => {
            setuserPhone(e.target.value);
          }}
          required
        />
        <input className="form-control"
          name="userPlace"
          type="text "
          placeholder="Place"
          value={userPlace}
          onChange={(e) => {
            setuserPlace(e.target.value);
          }}
          required
        />
        <input className="form-control"
          name="username"
          type="text "
          placeholder="User Name"
          value={userUserName}
          onChange={(e) => {
            setuserUsername(e.target.value);
          }}
        />
        <input className="form-control"
          name="password"
          type="text "
          placeholder="Password"
          value={userPassword}
          onChange={(e) => {
            setuserPassword(e.target.value);
          }}
        />
        <button type="submit">REGISTER</button>
      </form>
    </div>
  );
};

export default UserRegister;
