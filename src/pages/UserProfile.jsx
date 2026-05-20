import styles from "./UserProfile.module.css";

export function UserProfile() {
  return (
    <main>
      <section className={styles.userHeader}>
        <span className={styles.userAvatar}>T</span>
        <h2>User Name</h2>
        <p>User email</p>
      </section>

      <section className={styles.userInfo}>
        <div className={styles.userDetails}>
          <p>Name</p>
          <p>your name</p>
        </div>

        <div className={styles.userDetails}>
          <p>Email</p>
          <p>yourName@gmail.com</p>
        </div>

        <div className={styles.userDetails}>
          <p>Mobile</p>
          <p>your mobile number</p>
        </div>
      </section>

      <section className={styles.bookingHistory}>
        <ul>
          <li>
            <p>date</p>
            <p>time</p>
            <p>service</p>
            <p>message</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
