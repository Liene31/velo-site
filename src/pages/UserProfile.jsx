import { useAtom } from "jotai";
import styles from "./UserProfile.module.css";
import { authUserAtom } from "../atoms/token.atom";

export function UserProfile() {
  const [userDetails, setUserDetails] = useAtom(authUserAtom);

  console.log(userDetails);

  return (
    <main className={styles.profilePage}>
      <section className={styles.userHeader}>
        <span className={styles.userAvatar}>{userDetails.name.charAt(0)}</span>

        <div>
          <h1>{userDetails.name}</h1>
          <p>{userDetails.email}</p>
        </div>
      </section>

      <section className={styles.profileWrapper}>
        <div className={styles.profileCard}>
          <h2>Account Details</h2>

          <div className={styles.userDetails}>
            <span>Name</span>
            <p>{userDetails.name}</p>
          </div>

          <div className={styles.userDetails}>
            <span>Email</span>
            <p>{userDetails.email}</p>
          </div>

          <div className={styles.userDetails}>
            <span>Mobile</span>
            <p>{userDetails.email}</p>
          </div>
        </div>

        <div className={styles.historyCard}>
          <h2>Booking History</h2>

          <div className={styles.tableWrapper}>
            <table className={styles.bookingTable}>
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Service</th>
                  <th scope="col">Message</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>April 10, 2026</td>
                  <td>10:00</td>
                  <td>Repair</td>
                  <td>Brake adjustment and general inspection.</td>
                </tr>

                <tr>
                  <td>April 12, 2026</td>
                  <td>14:00</td>
                  <td>Maintenance</td>
                  <td>Full service and drivetrain cleaning.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
