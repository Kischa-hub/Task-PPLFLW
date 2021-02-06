import React, { useState, useEffect } from "react";
import Employee from "../components/employee";
import axios from "axios";

function dataaxios(props) {
  const [employees, setEmployess] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3005/employees")
      .then((res) => {
        console.log(res);
        setEmployess(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      {employees.map((item) => (
        <Employee key={item.ID} emp={item} />
      ))}
    </div>
  );
}

export default dataaxios;
