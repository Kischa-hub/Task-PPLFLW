import Head from "next/head";
import styles from "./layout.module.css";

export function About() {
  const { locale, locales } = useRouter();
  return (
    <div>
      <ul className="styles.breadcrumb">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Vehicles</a>
        </li>
        <li>
          <a href="#">Vans</a>
        </li>
        <li>
          <a href="#">Camper Vans</a>
        </li>
        <li>
          <a href="#">1989 VW Westfalia Vanagon</a>
        </li>
      </ul>
    </div>
  );
}

export default About;
