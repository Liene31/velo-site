import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function NotFound() {
  const { t } = useTranslation();
  return (
    <main className={styles.notFoundPage}>
      <section className={styles.notFoundCard}>
        <p className={styles.errorCode}>404</p>
        <h1>{t("notFound.title")}</h1>
        <p className={styles.errorText}>{t("notFound.text")}</p>

        <div className={styles.actions}>
          <Link to="/" className={`${styles.primaryBtn} ${styles.btn}`}>
            {t("notFound.backHome")}
          </Link>
          <Link to="/bikes" className={`${styles.secondaryBtn} ${styles.btn}`}>
            {t("notFound.explore")}
          </Link>
        </div>
      </section>
    </main>
  );
}
