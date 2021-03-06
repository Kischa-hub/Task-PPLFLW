import Head from "next/head";
import styles from "./nav.module.css";

export function Nav({ empstatus }) {
  let imagecase = "";

  switch (empstatus) {
    case "ADDED":
      return;
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
              className="h-4 inline-block hidden"
            />
          </a>
        </li>
        <li>
          <a href="#">
            {"In-check "}
            <img
              src="/like.svg"
              alt="My Account"
              className="h-4 inline-block hidden"
            />
          </a>
        </li>
        <li>
          <a href="#">
            {"approved"}
            <img
              src="/like.svg"
              alt="My Account"
              className="h-4 inline-block hidden"
            />
          </a>
        </li>
        <li>
          <a href="#">
            {"Active"}
            <img
              src="/like.svg"
              alt="My Account"
              className="h-4 inline-block hidden"
            />
          </a>
        </li>
        <li>
          <a href="#">
            {"Inactive "}
            <img
              src="/like.svg"
              alt="My Account"
              className="h-4 inline-block hidden"
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
