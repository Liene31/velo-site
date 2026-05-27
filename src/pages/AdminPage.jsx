import styles from "./AdminPage.module.css";

export function AdminPage() {
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

            <tbody>
              <tr>
                <td>April 10, 2026</td>
                <td>10:00</td>
                <td>
                  <span className={styles.strong}>John Doe</span>
                  <span>john@email.com</span>
                </td>
                <td>Repair</td>
                <td>
                  <span className={`${styles.statusBadge} ${styles.pending}`}>
                    Pending
                  </span>
                </td>
                <td>Brake adjustment and general inspection.</td>
                <td>
                  <div className={styles.actions}>
                    <button className={styles.confirmBtn}>Confirm</button>
                    <button className={styles.cancelBtn}>Cancel</button>
                  </div>
                </td>
              </tr>

              <tr>
                <td>April 12, 2026</td>
                <td>14:00</td>
                <td>
                  <span className={styles.strong}>Jane Smith</span>
                  <span>jane@email.com</span>
                </td>
                <td>Maintenance</td>
                <td>
                  <span className={`${styles.statusBadge} ${styles.confirmed}`}>
                    Confirmed
                  </span>
                </td>
                <td>Full service and drivetrain cleaning.</td>
                <td>
                  <div className={styles.actions}>
                    <button className={styles.completeBtn}>Complete</button>
                    <button className={styles.cancelBtn}>Cancel</button>
                  </div>
                </td>
              </tr>

              <tr>
                <td>April 12, 2026</td>
                <td>14:00</td>
                <td>
                  <span className={styles.strong}>Jane Smith</span>
                  <span>jane@email.com</span>
                </td>
                <td>Maintenance</td>
                <td>
                  <span className={`${styles.statusBadge} ${styles.cancelled}`}>
                    Cancelled
                  </span>
                </td>
                <td>Full service and drivetrain cleaning.</td>
                <td>
                  <div className={styles.actions}>
                    <button className={styles.completeBtn}>Complete</button>
                    <button className={styles.cancelBtn}>Cancel</button>
                  </div>
                </td>
              </tr>

              <tr>
                <td>April 12, 2026</td>
                <td>14:00</td>
                <td>
                  <span className={styles.strong}>Jane Smith</span>
                  <span>jane@email.com</span>
                </td>
                <td>Maintenance</td>
                <td>
                  <span className={`${styles.statusBadge} ${styles.completed}`}>
                    Completed
                  </span>
                </td>
                <td>Full service and drivetrain cleaning.</td>
                <td>
                  <div className={styles.actions}>
                    <button className={styles.completeBtn}>Complete</button>
                    <button className={styles.cancelBtn}>Cancel</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
