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
      <div className="flex-col bg-grey-bg p-6 w-96 rounded-md mx-auto">
        {employees.map((item) => (
          <Employee key={item.id} emp={item} />
        ))}
      </div>
      <div className="flex-row  bg-grey-bg p-6 w-96 rounded-md mx-auto justify-center align-middle">
        <label className="ml-10 ">
          <Link href="/">
            <a className=" text-accent">Back to Home</a>
          </Link>
        </label>

        <label className="ml-10 ">
          <Link href="/addEmplyee">
            <a className=" text-accent">Add Employee</a>
          </Link>
        </label>
      </div>
    </>
  );
}

export default dataaxios;
