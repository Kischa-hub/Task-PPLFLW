import React, { useState, useEffect } from "react";
import Employee from "../components/employee";
import axios from "axios";

function dataaxios(props) {
  const [employees, setEmployess] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3005/employees")
      .then((response) => {
        console.log(response);
        setEmployess(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      {employees.map((item) => (
        <Employee key={item.id} emp={item} />
      ))}
    </div>
  );
}

export default dataaxios;
