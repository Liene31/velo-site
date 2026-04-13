import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <main className={styles.hero}>
      <h1 className={styles.heroTitle}>Bike to the Future</h1>
      <Link className={styles.heroCta} to={"bikes"}>
        Explore our Bikes
      </Link>
    </main>
  );
}
