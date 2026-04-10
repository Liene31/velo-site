import styles from "./Bikes.module.css";
import { Link } from "react-router-dom";

export function Bikes() {
  return (
    <main className={styles.bikesPage}>
      <h1 className={styles.bikesTitle}>Explore our bikes</h1>

      <div className={styles.bikeFilterBtn}>
        <button>Road</button>
        <button>E-bikes</button>
        <button>Gravel</button>
        <button>Longtail</button>
        <button>Clear filters</button>
      </div>
      <div className={styles.bikesWrapper}>
        <Link className={styles.bikeCard} to="1">
          <i className={styles.bikeType}>Road</i>
          <img
            className={styles.bikeImg}
            src="https://asset.scott-sports.com/fit-in/260x260/425/4253488087_2223048_3.png?signature=991b49b7a60172fca3ba8def142f86b71122c7baf1937421157c38e1ba4b8502"
            alt="image of bike"
          />
          <h2>Bike Name</h2>
          <p>€ 2100</p>
        </Link>

        <div className={styles.bikeCard}>
          <i className={styles.bikeType}>Road</i>
          <img
            className={styles.bikeImg}
            src="https://asset.scott-sports.com/fit-in/260x260/425/4253488087_2223048_3.png?signature=991b49b7a60172fca3ba8def142f86b71122c7baf1937421157c38e1ba4b8502"
            alt="image of bike"
          />
          <h2>Bike Name</h2>
          <p>€ 2100</p>
        </div>
        <div className={styles.bikeCard}>
          <i className={styles.bikeType}>Road</i>
          <img
            className={styles.bikeImg}
            src="https://asset.scott-sports.com/fit-in/260x260/425/4253488087_2223048_3.png?signature=991b49b7a60172fca3ba8def142f86b71122c7baf1937421157c38e1ba4b8502"
            alt="image of bike"
          />
          <h2>Bike Name</h2>
          <p>€ 2100</p>
        </div>
        <div className={styles.bikeCard}>
          <i className={styles.bikeType}>Road</i>
          <img
            className={styles.bikeImg}
            src="https://asset.scott-sports.com/fit-in/260x260/425/4253488087_2223048_3.png?signature=991b49b7a60172fca3ba8def142f86b71122c7baf1937421157c38e1ba4b8502"
            alt="image of bike"
          />
          <h2>Bike Name</h2>
          <p>€ 2100</p>
        </div>
        <div className={styles.bikeCard}>
          <i className={styles.bikeType}>Road</i>
          <img
            className={styles.bikeImg}
            src="https://asset.scott-sports.com/fit-in/260x260/425/4253488087_2223048_3.png?signature=991b49b7a60172fca3ba8def142f86b71122c7baf1937421157c38e1ba4b8502"
            alt="image of bike"
          />
          <h2>Bike Name</h2>
          <p>€ 2100</p>
        </div>
      </div>
    </main>
  );
}
