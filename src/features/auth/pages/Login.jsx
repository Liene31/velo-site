import styles from "./Login.module.css";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <main className={styles.loginPage}>
      <section className={styles.loginCard}>
        <div className={styles.loginHeader}>
          <h1>Welcome Back</h1>
          <p>Log in to manage your account, bookings, and bike services.</p>
        </div>

        <form className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
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
              <label htmlFor="password">Password</label>
              <Link className={styles.forgotLink}>Forgot password?</Link>
            </div>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className={styles.loginBtn}>
            Log In
          </button>
        </form>

        <p className={styles.registerText}>
          Don't have an account?
          <Link to="/auth/register" className={styles.registerLink}>
            Create one
          </Link>
        </p>
      </section>
    </main>
  );
}
