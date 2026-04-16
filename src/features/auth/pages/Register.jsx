import styles from "./Auth.module.css";
import { Link } from "react-router-dom";

export function Register() {
  return (
    <main className={styles.authPage}>
      <section className={styles.authCard}>
        <div className={styles.authHeader}>
          <h1>Create Account</h1>
          <p>Sign up to manage your account, bookings, and bike services.</p>
        </div>

        <form className={styles.authForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              required
            />
          </div>

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
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Create a password"
              required
            />
            <p className={styles.fieldHint}>Use at least 8 characters</p>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Repeat your password"
              required
            />
          </div>

          <button type="submit" className={styles.authBtn}>
            Sign Up
          </button>
        </form>

        <p className={styles.authText}>
          Already have an account?
          <Link to="/auth/login" className={styles.authLink}>
            Log In
          </Link>
        </p>
      </section>
    </main>
  );
}
