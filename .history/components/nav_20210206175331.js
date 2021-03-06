import Head from "next/head";
import styles from "./nav.module.css";

export function Nav({ empstatus }) {
  let added = "";
  let incheck = "";
  let approved = "";
  let active = "";
  let inactive = "";

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
  return (
    <div className="flex bg-grey-bg justify-center align-middle items-center">
      <ul className={styles.breadcrumb}>
        <li>
          <a href="#">
            {"ADDED"}
            <img
              src="/like.svg"
              alt="My Account"
              className={`${added} h-4 inline-block`}
            />
          </a>
        </li>
        <li>
          <a href="#">
            {"In-check"}
            <img
              src="/like.svg"
              alt="My Account"
              className={`${incheck} h-4 inline-block`}
            />
          </a>
        </li>
        <li>
          <a href="#">
            {"approved"}
            <img
              src="/like.svg"
              alt="My Account"
              className={`${} h-4 inline-block`}
            />
          </a>
        </li>
        <li>
          <a href="#">
            {"Active"}
            <img
              src="/like.svg"
              alt="My Account"
              className={`${} h-4 inline-block`}
            />
          </a>
        </li>
        <li>
          <a href="#">
            {"Inactive "}
            <img
              src="/like.svg"
              alt="My Account"
              className={`${} h-4 inline-block`}
            />
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
