import styles from "./Auth.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { authService } from "../../../services/auth.service.js";
import { useState } from "react";
import { loggedInAtom } from "../../../atoms/login.atom.js";
import { useSetAtom } from "jotai";

export function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { t } = useTranslation();
  //using Jotai for global values son non direct parent/child components have access
  //avoiding prop drilling
  const setLoggedIn = useSetAtom(loggedInAtom);

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
      //success -> stop loading
      setIsLoading(false);
      //on success, uses jotai atom so the header component knows that login was successful
      //in order to change btn from login to user details
      setLoggedIn(true);
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

          {error && (
            //role=alert -> using to communicate an important message to the user
            <p className={styles.errorMessage} role="alert">
              {error}
            </p>
          )}

          <button disabled={isLoading} type="submit" className={styles.authBtn}>
            {isLoading ? "Logging in...." : "Login"}
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
