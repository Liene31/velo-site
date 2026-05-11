import styles from "./Auth.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { authService } from "../../../services/auth.service.js";
import { useState } from "react";

export function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { t } = useTranslation();

  const handleLoginSubmit = async (formData) => {
    //login btn is pressed, loading can start
    setIsLoading(true);
    //reset the old error when submitting again
    //otherwise an old error may stay visible
    setError(null);
    const data = Object.fromEntries(formData.entries());

    const payload = {
      email: data.email,
      password: data.password,
    };

    console.log(payload);

    try {
      const response = await authService.login(payload);
      console.log(response);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data.message);
        // server responded (e.g. 500 with "DB error")
        setError(err.response.data.message);
      } else if (err.request) {
        console.log("Server unavailable, please try again later");
        // request made but no response (server down / network issue)
        setError("Server unavailable, please try again later");
      } else {
        // something else went wrong
        setError("Unexpected error, please try again later");
      }
      setIsLoading(false);
    }
  };

  return (
    <main className={styles.authPage}>
      <section className={styles.authCard}>
        <div className={styles.authHeader}>
          <h1>{t("auth.login.title")}</h1>
          <p>{t("auth.login.subtitle")}</p>
        </div>

        <form className={styles.authForm} action={handleLoginSubmit}>
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
