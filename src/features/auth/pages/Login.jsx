import styles from "./Auth.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { authService } from "../../../services/auth.service.js";
import { useState } from "react";
import { authUserAtom } from "../../../atoms/token.atom.js";
import { useSetAtom } from "jotai";
import { useAtomValue } from "jotai";
import { bookingAtom } from "../../../atoms/booking.atom.js";

export function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  //first check if there is a state passed from register
  //if yes, inform user that account is registered (message comes from Register component, with passed in state if success)
  //if user goes directly to login page, state is null, and default message is displayed
  let subtitle = "";

  if (location.state) {
    subtitle = location.state.message;
  } else {
    subtitle = "Log in to manage your account, bookings, and bike services.";
  }

  //using Jotai for global values son non direct parent/child components have access
  //avoiding prop drilling
  const setAuthUserAtom = useSetAtom(authUserAtom);

  //if the user was not logged in when doing the booking
  //he is re-directed to login page
  //reading saved date and time in jotai booking.atom so the data can be recuperated and used in booking confirmation after login
  const bookingData = useAtomValue(bookingAtom);

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

    try {
      const response = await authService.login(payload);

      //success -> stop loading
      setIsLoading(false);
      //on success, uses jotai atom so the header component knows that login was successful
      //in order to change btn from login to user details
      setAuthUserAtom({
        name: response.name,
        email: response.userEmail,
        role: response.role,
        token: response.token,
        userId: response.id,
      });

      localStorage.setItem("token", response.token);

      if (bookingData) {
        navigate("/service/booking/confirmation");
      } else {
        //navigate back to home page
        navigate("/");
      }
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
          <h1>{t("auth.login.title")}</h1>
          {/* dynamic message based from where user gets to login (directly or re-directed from register) */}
          <p>{subtitle}</p>
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
