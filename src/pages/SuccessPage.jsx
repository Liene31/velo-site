import { useAtomValue } from "jotai";
import styles from "./SuccessPage.module.css";
import { Link } from "react-router-dom";
import { bookingAtom } from "../atoms/booking.atom.js";

export function SuccessPage() {
  const bookingData = useAtomValue(bookingAtom);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const bookingMonth = bookingData.bookingDate.getMonth();
  const bookingDate = bookingData.bookingDate.getDate();
  const bookingYear = bookingData.bookingDate.getFullYear();
  const bookingTime = bookingData.bookedTime;

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
            <p>
              {months[bookingMonth]} {bookingDate}, {bookingYear}
            </p>
          </div>

          <div className={styles.detailItem}>
            <span>Time</span>
            <p>{bookingTime}</p>
          </div>

          <div className={styles.detailItem}>
            <span>Service</span>
            <p>{bookingData.serviceType}</p>
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
