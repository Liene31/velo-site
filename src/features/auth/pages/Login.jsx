import styles from "./Auth.module.css";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <main className={styles.authPage}>
      <section className={styles.authCard}>
        <div className={styles.authHeader}>
          <h1>Welcome Back</h1>
          <p>Log in to manage your account, bookings, and bike services.</p>
        </div>

        <form className={styles.authForm}>
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

          <button type="submit" className={styles.authBtn}>
            Log In
          </button>
        </form>

        <p className={styles.authText}>
          Don't have an account?
          <Link to="/auth/register" className={styles.authLink}>
            Create one
          </Link>
        </p>
      </section>
    </main>
  );
}
