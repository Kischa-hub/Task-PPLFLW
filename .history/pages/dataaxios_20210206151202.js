import React, { useState, useEffect } from "react";
import Employee from "../components/employee";
import Link from "next/link";
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
    <>
      <div>
        {employees.map((item) => (
          <Employee key={item.id} emp={item} />
        ))}
      </div>
      <div className="w-96 flex-row justify-center align-middle">
        <label className="ml-40 text-blue">
          <Link href="/">
            <a>Back to Home</a>
          </Link>
        </label>

        <label className="ml-20 text-blue">
          <Link href="/addEmplyee">
            <a>Add Employee</a>
          </Link>
        </label>
      </div>
    </>
  );
}

export default dataaxios;
