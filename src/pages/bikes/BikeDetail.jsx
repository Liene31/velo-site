import { useEffect, useState } from "react";
import styles from "./BikeDetail.module.css";
import { NavLink, Outlet, useParams } from "react-router-dom";

export function BikeDetail() {
  const [currentBike, setCurrentBike] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/data/bikes.json`)
      .then((res) => res.json())
      .then((data) => {
        const filteredBike = data.filter((bike) => {
          return bike.id === id;
        });
        // ----------normalizing data, same as in BikeOverview------
        setCurrentBike(filteredBike);
      });
  }, []);

  const bikeElement = currentBike?.map((bike) => {
    return (
      <div className={styles.bikeInfo} key={bike.id}>
        <i>{bike.overview.category}</i>
        <h1>{bike.name}</h1>
        <p>
          {bike.overview.currency} {bike.overview.price}
        </p>
      </div>
    );
  });

  return (
    <main className={styles.bikesDetailPage}>
      <div className={styles.bikeDetailWrapper}>
        <div className={styles.bikeTopInfo}>
          <img
            className={styles.bikeImg}
            src="https://asset.scott-sports.com/fit-in/260x260/425/4253488087_2223048_3.png?signature=991b49b7a60172fca3ba8def142f86b71122c7baf1937421157c38e1ba4b8502"
            alt="image of bike"
          />
          {currentBike ? bikeElement : <h2>Loading</h2>}
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
