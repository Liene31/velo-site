import styles from "./Auth.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Login() {
  const { t } = useTranslation();
  return (
    <main className={styles.authPage}>
      <section className={styles.authCard}>
        <div className={styles.authHeader}>
          <h1>{t("auth.login.title")}</h1>
          <p>{t("auth.login.subtitle")}</p>
        </div>

        <form className={styles.authForm}>
          <div className={styles.formGroup}>
            <label htmlFor="email">{t("auth.login.email")}</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="johnDoe@email.com"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <div className={styles.passwordRow}>
              <label htmlFor="password">{t("auth.login.password")}</label>
              <Link className={styles.forgotLink}>
                {t("auth.login.forgotPassword")}
              </Link>
            </div>

            <input
              id="password"
              name="password"
              type="password"
              placeholder={t("auth.login.placeholderPassword")}
              required
            />
          </div>

          <button type="submit" className={styles.authBtn}>
            {t("auth.login.submit")}
          </button>
        </form>

        <p className={styles.authText}>
          {t("auth.login.noAccount")}
          <Link to="/auth/register" className={styles.authLink}>
            {t("auth.login.createOne")}
          </Link>
        </p>
      </section>
    </main>
  );
}
