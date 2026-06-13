import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Home() {
  const { t } = useTranslation();
  return (
    <main className={styles.hero}>
      <h1 className={styles.heroTitle}>Bike to the Future</h1>
      <Link className={styles.heroCta} to={"bikes"}>
        {t("home.heroCta")}
      </Link>
    </main>
  );
}
