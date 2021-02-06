import Head from "next/head";
import styles from "./nav.module.css";

export function Nav() {
  //const { locale, locales } = useRouter();
  return (
    <div className="flex-col bg-grey-bg   rounded-md mx-auto">
      <ul className={styles.breadcrumb}>
        <li>
          <a href="#">ADDED</a>
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
