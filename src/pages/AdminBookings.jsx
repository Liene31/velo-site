import { useEffect, useState } from "react";
import styles from "./AdminBookings.module.css";
import { bookingService } from "../services/booking.service";

export function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    bookingService
      .getAll()
      .then((data) => {
        setBookings(data.bookings);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          // server responded (e.g. 500 with "DB error")
          setError(error.response.data.message);
        } else if (error.request) {
          // request made but no response (server down / network issue)
          setError("Server unavailable, please try again later");
        } else {
          // something else went wrong
          setError("Unexpected error, please try again later");
        }
        setIsLoading(false);
      });
  }, []);

  const bookingData = bookings.map((booking) => {
    const date = new Date(booking.bookingDate);
    const bookingMonth = date.getMonth();
    const bookingDate = date.getDate();
    const bookingYear = date.getFullYear();

    return (
      <tr key={booking._id}>
        <td>
          {months[bookingMonth]} {bookingDate}, {bookingYear}
        </td>
        <td>{booking.bookingTime}</td>
        <td>
          <span className={styles.strong}>{booking.name}</span>
          <span>{booking.email}</span>
        </td>
        <td>{booking.serviceType}</td>
        <td>
          <span className={`${styles.statusBadge} ${styles.confirmed}`}>
            Confirmed
          </span>
        </td>
        <td>{booking.message}</td>
        <td>
          <div className={styles.actions}>
            <button className={styles.completeBtn}>Complete</button>
            <button className={styles.cancelBtn}>Cancel</button>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <main className={styles.adminPage}>
      <section className={styles.adminHero}>
        <h1>Admin Bookings</h1>
        <p>Manage service appointments and customer requests.</p>
      </section>

      <section className={styles.statsWrapper}>
        <div className={styles.statCard}>
          <span>Total</span>
          <p>24</p>
        </div>

        <div className={styles.statCard}>
          <span>Pending</span>
          <p>8</p>
        </div>

        <div className={styles.statCard}>
          <span>Confirmed</span>
          <p>6</p>
        </div>

        <div className={styles.statCard}>
          <span>Completed</span>
          <p>6</p>
        </div>

        <div className={styles.statCard}>
          <span>Cancelled</span>
          <p>4</p>
        </div>
      </section>

      <section className={styles.statsSelect}>
        <label>
          Status
          <select name="statsSelect" defaultValue="all">
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </label>

        <label>
          Date
          <input name="date" type="date" />
        </label>
      </section>

      <section className={styles.bookingsCard}>
        <h2>Booking Requests</h2>

        <div className={styles.tableWrapper}>
          <table className={styles.bookingsTable}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Customer</th>
                <th>Service</th>
                <th>Status</th>
                <th>Message</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>{bookingData}</tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
