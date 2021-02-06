import Head from "next/head";
import styles from "./nav.module.css";

export function Nav({ empstatus }) {
  return (
    <div className="flex bg-grey-bg justify-center align-middle items-center">
      <ul className={styles.breadcrumb}>
        <li>
          <a href="#">
            {" "}
            <img src="/like.svg" alt="My Account" className="h-4" />
          </a>
        </li>
        <li>
          <a href="#">In-check</a>
        </li>
        <li>
          <a href="#">approved</a>
        </li>
        <li>
          <a href="#">Active</a>
        </li>
        <li>
          <a href="#">Inactive</a>
        </li>
        <li>
          <a href="#"></a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
