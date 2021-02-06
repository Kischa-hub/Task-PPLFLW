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
      <div className="flex-row">
        <em>
          <Link href="/">
            <a>Back to Home</a>
          </Link>
        </em>
        <em>
          <Link href="/addEmplyee">
            <a>Back to Home</a>
          </Link>
        </em>
      </div>
    </>
  );
}

export default dataaxios;
