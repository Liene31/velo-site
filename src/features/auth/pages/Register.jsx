import styles from "./Auth.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Register() {
  const { t } = useTranslation();
  return (
    <main className={styles.authPage}>
      <section className={styles.authCard}>
        <div className={styles.authHeader}>
          <h1>{t("auth.register.title")}</h1>
          <p>{t("auth.register.subtitle")}</p>
        </div>

        <form className={styles.authForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">{t("auth.register.name")}</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">{t("auth.register.email")}</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="johnDoe@email.com"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">{t("auth.register.password")}</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder={t("auth.register.placeholderPassword")}
              required
            />
          </div>

          <button type="submit" className={styles.authBtn}>
            {t("auth.register.submit")}
          </button>
        </form>

        <p className={styles.authText}>
          {t("auth.register.haveAccount")}
          <Link to="/auth/login" className={styles.authLink}>
            {t("auth.register.login")}
          </Link>
        </p>
      </section>
    </main>
  );
}
