import styles from "./Contact.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();

  return (
    <main className={styles.contactPage}>
      <section className={styles.contactHero}>
        <h1>{t("contact.title")}</h1>
        <p>{t("contact.subtitle")}</p>
      </section>

      <section className={styles.contactContent}>
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">{t("contact.form.name")}</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">{t("contact.form.email")}</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="johnDoe@email.com"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject">{t("contact.form.subject")}</label>
            <select id="subject" name="subject" required defaultValue="">
              <option value="">{t("contact.form.selectOption")}</option>
              <option value="repair">{t("contact.form.options.repair")}</option>
              <option value="maintenance">
                {t("contact.form.options.maintenance")}
              </option>
              <option value="appointment">
                {t("contact.form.options.appointment")}
              </option>
              <option value="after-service">
                {t("contact.form.options.afterService")}
              </option>
              <option value="general">
                {t("contact.form.options.general")}
              </option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">{t("contact.form.message")}</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder={t("contact.form.placeholderMessage")}
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>
            {t("contact.form.submit")}
          </button>
        </form>

        <div className={styles.asideSection}>
          <aside className={styles.contactInfo}>
            <h2>Bike Into The Future</h2>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>
                {t("contact.info.address")}
              </span>
              <p>Chaussée de Louvain 474, 1030 Schaerbeek</p>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>
                {t("contact.info.email")}
              </span>
              <p>biketothefuture@gmail.com</p>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>
                {t("contact.info.hours")}
              </span>
              <p>{t("contact.info.hoursValue")}</p>
            </div>
          </aside>
          <aside className={styles.booking}>
            <h2>{t("service.booking.title")}</h2>
            <p>{t("service.booking.text")}</p>
            <Link className={styles.bookingCta} to="/service/booking">
              {t("service.booking.cta")}
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
