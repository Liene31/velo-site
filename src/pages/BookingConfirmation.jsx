import { Link } from "react-router-dom";
import styles from "./BookingConfirmation.module.css";

export function BookingConfirmation() {
  return (
    <main className={styles.confirmationPage}>
      <section className={styles.confirmationHero}>
        <h1>Booking Confirmation</h1>
        <p>Please fill in the missing information to finalise your booking.</p>
      </section>

      <section className={styles.confirmationContent}>
        <aside className={styles.bookingSummary}>
          <h2>Your selected slot</h2>

          <div className={styles.summaryItem}>
            <span>Date</span>
            <p>April 10, 2026</p>
          </div>

          <div className={styles.summaryItem}>
            <span>Time</span>
            <p>10:00</p>
          </div>

          <Link to="/service/booking" className={styles.changeBtn}>
            Change Date & Time
          </Link>
        </aside>
        <form className={styles.confirmationForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name *</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="johnDoe@email.com"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+32 470 00 00 00"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="service">Service Type *</label>
            <select id="service" name="service" required defaultValue="">
              <option value="" disabled>
                --Please choose a service type--
              </option>
              <option value="repair">Repair</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Provide more details about your bike or issue..."
            ></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Confirm Booking
          </button>
        </form>
      </section>
    </main>
  );
}
