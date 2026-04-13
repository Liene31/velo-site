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

        setCurrentBike(filteredBike[0]);
      });
  }, []);

  return (
    <main className={styles.bikesDetailPage}>
      <div className={styles.bikeDetailWrapper}>
        <div className={styles.bikeTopInfo}>
          {currentBike ? (
            <>
              <img
                className={styles.bikeImg}
                src={currentBike.images[0].url}
                alt={currentBike.images[0].alt}
              />
              <div className={styles.bikeInfo}>
                <i>{currentBike.overview.category}</i>
                <h1>{currentBike.name}</h1>
                <p>
                  {currentBike.overview.currency} {currentBike.overview.price}
                </p>
              </div>
            </>
          ) : (
            <h2>Loading</h2>
          )}
        </div>
        <nav className={styles.navLinks}>
          <NavLink to="." end>
            Overview
          </NavLink>
          <NavLink to="specs">Specs</NavLink>
          <NavLink to="photos">Photos</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </nav>
        <Outlet className={styles.detailContent} context={{ currentBike }} />
      </div>
    </main>
  );
}
