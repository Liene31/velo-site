import styles from "./SuccessPage.module.css";
import { Link } from "react-router-dom";

export function SuccessPage() {
  return (
    <main className={styles.successPage}>
      <section className={styles.successCard}>
        <div className={styles.successIcon}>✓</div>

        <h1>Booking Confirmed</h1>

        <p className={styles.successText}>
          Your appointment has been scheduled successfully. We look forward to
          seeing you.
        </p>

        <div className={styles.bookingDetails}>
          <div className={styles.detailItem}>
            <span>Date</span>
            <p>April 10, 2026</p>
          </div>

          <div className={styles.detailItem}>
            <span>Time</span>
            <p>10:00</p>
          </div>

          <div className={styles.detailItem}>
            <span>Service</span>
            <p>Repair</p>
          </div>
        </div>

        <div className={styles.actions}>
          <Link to="/" className={`${styles.primaryBtn} ${styles.btn}`}>
            Bike Home
          </Link>
          <Link to="/bikes" className={`${styles.secondaryBtn} ${styles.btn}`}>
            Explore Bikes
          </Link>
        </div>
      </section>
    </main>
  );
}
