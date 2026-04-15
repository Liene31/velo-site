import styles from "./Contact.module.css";

export function Contact() {
  return (
    <main className={styles.contactPage}>
      <section className={styles.contactHero}>
        <h1>Contact Our Team</h1>
        <p>Any question? We would love to hear from you.</p>
      </section>

      <section className={styles.contactContent}>
        <form className={styles.contactForm}>
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
              placeholder="your@email.com"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject *</label>
            <select id="subject" name="subject" required defaultValue="">
              <option value="">--Please choose an option--</option>
              <option value="repair">Repair</option>
              <option value="maintenance">Maintenance</option>
              <option value="appointment">Appointment</option>
              <option value="after-service">After-service support</option>
              <option value="general">General question</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell us how we can help..."
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>

        <aside className={styles.contactInfo}>
          <h2>Bike Into The Future</h2>

          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Address</span>
            <p>Chaussée de Louvain 474, 1030 Schaerbeek</p>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Email</span>
            <p>biketothefuture@gmail.com</p>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Opening Hours</span>
            <p>Mardi au samedi 10h - 18h</p>
          </div>
        </aside>
      </section>
    </main>
  );
}
