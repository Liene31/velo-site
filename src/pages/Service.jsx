import styles from "./Service.module.css";

export function Service() {
  return (
    <main className={styles.servicesPage}>
      <section className={styles.serviceHero}>
        <h1>Bike Services</h1>
        <p>
          Professional repair & maintenance to keep your bike running at its
          best.
        </p>
        <a href="#booking" className={styles.cta}>
          Book Appointment
        </a>
      </section>

      <section className={styles.serviceWrapper}>
        <div className={styles.serviceCard}>
          <h2>Repair</h2>
          <ul>
            <li>Brake adjustment & replacement</li>
            <li>Gear tuning & indexing</li>
            <li>Flat tire repair</li>
            <li>Wheel truing</li>
            <li>Chain & cassette replacement</li>
          </ul>
        </div>

        <div className={styles.serviceCard}>
          <h2>Maintenance</h2>
          <ul>
            <li>Full bike inspection</li>
            <li>Drivetrain cleaning & lubrication</li>
            <li>Safety check</li>
            <li>Torque check on all bolts</li>
            <li>Bike wash & polish</li>
          </ul>
        </div>
      </section>

      <section className={styles.pricingWrapper}>
        <div className={styles.priceCard}>
          <h3>Basic Tune-Up</h3>
          <p className={styles.price}>€49</p>
          <ul>
            <li>Brake adjustment</li>
            <li>Gear tuning</li>
            <li>Chain lubrication</li>
          </ul>
        </div>

        <div className={styles.priceCard}>
          <h3>Standard Service</h3>
          <p className={styles.price}>€79</p>
          <ul>
            <li>Full inspection</li>
            <li>Brake + gear tuning</li>
            <li>Drivetrain cleaning</li>
          </ul>
        </div>

        <div className={styles.priceCard}>
          <h3>Full Service</h3>
          <p className={styles.price}>€119</p>
          <ul>
            <li>Complete bike overhaul</li>
            <li>Deep cleaning</li>
            <li>All adjustments included</li>
          </ul>
        </div>
      </section>

      <ul className={styles.priceList}>
        <li>
          <span>Flat tire repair</span>
          <span>€15</span>
        </li>
        <li>
          <span>Brake adjustment</span>
          <span>€20</span>
        </li>
        <li>
          <span>Gear tuning</span>
          <span>€25</span>
        </li>
        <li>
          <span>Wheel truing</span>
          <span>€30</span>
        </li>
        <li>
          <span>Chain replacement</span>
          <span>€35</span>
        </li>
      </ul>

      <section className={styles.booking}>
        <h2>Book your service</h2>
        <p>
          Ready to ride? Schedule your service and we'll take care of the rest.
        </p>
        <a href="#booking" className={styles.cta}>
          Schedule Now
        </a>
      </section>
    </main>
  );
}
