import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <main className={styles.hero}>
      <h1 className={styles.heroTitle}>Ride Into The Future</h1>
      <Link className={styles.heroCta} to={"bikes"}>
        Explore our Bikes
      </Link>
    </main>
  );
}
