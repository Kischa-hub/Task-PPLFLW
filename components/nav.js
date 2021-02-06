import Head from "next/head";
import styles from "./nav.module.css";
import axios from "axios";
import { apiUrl } from "../config.json";

export function Nav({ empstatus, empid }) {
  let added = "";
  let incheck = "";
  let approved = "";
  let active = "";
  let inactive = "";
  const apiEndPoint = apiUrl;

  switch (empstatus) {
    case "ADDED": {
      added = "";
      incheck = "hidden";
      approved = "hidden";
      active = "hidden";
      inactive = "hidden";
      break;
    }
    case "IN-CHECK": {
      added = "hidden";
      incheck = "";
      approved = "hidden";
      active = "hidden";
      inactive = "hidden";
      break;
    }
    case "APPROVED": {
      added = "hidden";
      incheck = "hidden";
      approved = "";
      active = "hidden";
      inactive = "hidden";
      break;
    }
    case "ACTIVE": {
      added = "hidden";
      incheck = "hidden";
      approved = "hidden";
      active = "";
      inactive = "hidden";
      break;
    }
    case "INACTIVE": {
      added = "hidden";
      incheck = "hidden";
      approved = "hidden";
      active = "hidden";
      inactive = "";
      break;
    }
  }

  function handle_added_Click(e) {
    e.preventDefault();
    console.log("Employee id is", apiEndPoint + "/" + empid);
    axios
      .patch(apiEndPoint + "/" + empid, { Status: "ADDED" })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function handle_incheck_Click(e) {
    e.preventDefault();
    console.log("Employee id is", apiEndPoint + "/" + empid);
    axios
      .patch(apiEndPoint + "/" + empid, { Status: "IN-CHECK" })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function handle_approved_Click(e) {
    e.preventDefault();
    console.log("Employee id is", apiEndPoint + "/" + empid);
    axios
      .patch(apiEndPoint + "/" + empid, { Status: "APPROVED" })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handle_active_Click(e) {
    e.preventDefault();
    console.log("Employee id is", apiEndPoint + "/" + empid);
    axios
      .patch(apiEndPoint + "/" + empid, { Status: "ACTIVE" })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handle_inactive_Click(e) {
    e.preventDefault();
    console.log("Employee id is", apiEndPoint + "/" + empid);
    axios
      .patch(apiEndPoint + "/" + empid, { Status: "INACTIVE" })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="flex bg-grey-bg justify-center align-middle items-center">
      <ul className={styles.breadcrumb}>
        <li>
          <a href="#" onClick={handle_added_Click}>
            {"ADDED"}
            <img src="/like.svg" className={`${added} h-4 inline-block ml-2`} />
          </a>
        </li>
        <li>
          <a href="#" onClick={handle_incheck_Click}>
            {"In-check"}
            <img src="/like.svg" className={`${incheck} h-4 inline-block`} />
          </a>
        </li>
        <li>
          <a href="#" onClick={handle_approved_Click}>
            {"approved"}
            <img src="/like.svg" className={`${approved} h-4 inline-block`} />
          </a>
        </li>
        <li>
          <a href="#" onClick={handle_active_Click}>
            {"Active"}
            <img src="/like.svg" className={`${active} h-4 inline-block`} />
          </a>
        </li>
        <li>
          <a href="#" onClick={handle_inactive_Click}>
            {"Inactive "}
            <img src="/like.svg" className={`${inactive} h-4 inline-block`} />
          </a>
        </li>
        <li>
          <a href="#"></a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
