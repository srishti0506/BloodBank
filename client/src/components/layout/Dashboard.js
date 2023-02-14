import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";

//css
import "../../assets/css/Dashboard.css";

//background image
//import bfImg from '../../assets/img/bg.png'

const Dashboard = () => {
  //array of blood unit availbility
  const [bloodTable, setbloodTable] = useState([]);

  //useEffect call
  useEffect(() => {
    axios
      .get("http://localhost:3001/home")
      .then(function (response) {
        //console.log(response);
        setbloodTable(response.data)
      });
  }, []);

  return (
    <div className="dashboard container">
      <center><h1>BLOOD STOCK</h1></center>
&nbsp;
      <table className="blood-table table table-striped">
        <thead className="text-center">
          <tr>
            <th>BLOOD GROUP</th>
            <th>UNIT</th>
          </tr>
        </thead>
        <tbody>
          {bloodTable.length > 0 && bloodTable.map((val) => {
            return (
              <tr key={val.b_id}>
                <td>{val.blood_group}</td>
                <td>{val.unit}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <img src={bfImg} alt="bg"/>*/}
      <Footer />
    </div>
  );
};

export default Dashboard;
