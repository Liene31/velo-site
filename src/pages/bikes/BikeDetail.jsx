import styles from "./BikeDetail.module.css";
import { NavLink, Outlet } from "react-router-dom";

export function BikeDetail() {
  return (
    <main className={styles.bikesDetailPage}>
      <div className={styles.bikeDetailWrapper}>
        <div className={styles.bikeTopInfo}>
          <img
            className={styles.bikeImg}
            src="https://asset.scott-sports.com/fit-in/260x260/425/4253488087_2223048_3.png?signature=991b49b7a60172fca3ba8def142f86b71122c7baf1937421157c38e1ba4b8502"
            alt="image of bike"
          />
          <div className={styles.bikeInfo}>
            <i>Road</i>
            <h1>Bike Name</h1>
            <p>€ 2100</p>
          </div>
        </div>
        <nav className={styles.navLinks}>
          <NavLink to="." end>
            Overview
          </NavLink>
          <NavLink to="specs">Specs</NavLink>
          <NavLink to="photos">Photos</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </nav>
        <Outlet className={styles.detailContent} />
      </div>
    </main>
  );
}
