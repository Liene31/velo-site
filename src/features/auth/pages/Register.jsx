import styles from "./Auth.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { authService } from "../../../services/auth.service";

export function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { t } = useTranslation();

  const handleRegisterSubmit = async (formData) => {
    //register btn is pressed, loading can start
    setIsLoading(true);
    //reset the old error when submitting again
    //otherwise an old error may stay visible
    setError(null);

    const data = Object.fromEntries(formData.entries());

    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      const response = await authService.register(payload);
      //success -> stop loading
      setIsLoading(false);
      //THINK WHAT TO DO WHEN SUCCESS --> success message and/or navigate to another page
      console.log(response);
    } catch (err) {
      if (err.response) {
        // server responded (e.g. 500 with "DB error")
        setError(err.response.data.message);
      } else if (err.request) {
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
          <h1>{t("auth.register.title")}</h1>
          <p>{t("auth.register.subtitle")}</p>
        </div>

        <form className={styles.authForm} action={handleRegisterSubmit}>
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

          {error && (
            //role=alert -> using to communicate an important message to the user
            <p className={styles.errorMessage} role="alert">
              {error}
            </p>
          )}

          <button disabled={isLoading} type="submit" className={styles.authBtn}>
            {isLoading ? "Signing in...." : "Sign Up"}
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
