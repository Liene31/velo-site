import styles from "./About.module.css";

export function About() {
  return (
    <main className={styles.aboutPage}>
      <section className={styles.aboutHero}>
        <div className={styles.heroText}>
          <h1>More than a bike shop</h1>
          <p>
            We help riders find the right bike, keep it running smoothly, and
            enjoy every ride with confidence.
          </p>
        </div>

        <img
          className={styles.heroImg}
          src="/images/about-shop.png"
          alt="Bike Into The Future bike shop"
        />
      </section>

      <section className={styles.storySection}>
        <h2>Our Story</h2>
        <p>
          Bike Into The Future was created for riders who love performance,
          design, and reliable service. From daily commuters to weekend road
          cyclists, we offer carefully selected bikes and hands-on maintenance
          in a modern, welcoming shop.
        </p>
      </section>

      <section className={styles.valuesGrid}>
        <article className={styles.valueCard}>
          <h3>Expert Advice</h3>
          <p>
            We help you choose the right bike based on your riding style,
            comfort, and budget.
          </p>
        </article>

        <article className={styles.valueCard}>
          <h3>Reliable Service</h3>
          <p>
            Repairs and maintenance are handled with care, clear communication,
            and attention to detail.
          </p>
        </article>

        <article className={styles.valueCard}>
          <h3>Future-Ready Rides</h3>
          <p>
            From road bikes to e-bikes, we focus on bikes built for modern
            riding.
          </p>
        </article>
      </section>

      <section className={styles.infoSection}>
        <div>
          <h2>Visit Us</h2>
          <p>Chaussée d’Alsemberg 728, 1180 Uccle</p>
          <p>Tuesday to Saturday 10:00 – 18:00</p>
        </div>

        <div className={styles.actions}>
          <a href="/bikes" className={styles.primaryBtn}>
            Explore Bikes
          </a>
          <a href="/service" className={styles.secondaryBtn}>
            View Services
          </a>
        </div>
      </section>
    </main>
  );
}
