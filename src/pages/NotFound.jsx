import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <main className={styles.notFoundPage}>
      <section className={styles.notFoundCard}>
        <p className={styles.errorCode}>404</p>
        <h1>Page Not Found</h1>
        <p className={styles.errorText}>
          Looks like this ride went off route. The page you're looking for
          doesn't exist or has been moved.
        </p>

        <div className={styles.actions}>
          <Link to="/" className={`${styles.primaryBtn} ${styles.btn}`}>
            Back Home
          </Link>
          <Link to="/bikes" className={`${styles.secondaryBtn} ${styles.btn}`}>
            Explore Bikes
          </Link>
        </div>
      </section>
    </main>
  );
}
