import { useEffect, useState } from "react";
import styles from "./BikeDetail.module.css";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { bikeService } from "../../services/bike.service";

export function BikeDetail() {
  const [currentBike, setCurrentBike] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    bikeService
      .getById(id)
      .then((data) => {
        setCurrentBike(data);
        setIsLoading(false);
        console.log(data);
      })
      .catch((error) => {
        if (error.response) {
          // server responded (e.g. 500 with "DB error")
          setError(error.response.data.message);
        } else if (error.request) {
          // request made but no response (server down / network issue)
          setError("Server unavailable, please try again later");
        } else {
          // something else went wrong
          setError("Unexpected error, please try again later");
        }
        setIsLoading(false);
      });
    //use id as dependency because data should re-load if id is changing
  }, [id]);

  //checks if no errors and data is loaded
  // if conditions are not met/or is met, shows appropriate message
  let bikeDetailContent;

  if (error) {
    bikeDetailContent = <p>{error}</p>;
  } else if (isLoading) {
    bikeDetailContent = <p>Loading</p>;
  } else if (!currentBike) {
    bikeDetailContent = <p>Bike not found</p>;
  } else {
    bikeDetailContent = (
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
    );
  }

  return (
    <main className={styles.bikesDetailPage}>
      <div className={styles.bikeDetailWrapper}>
        <div className={styles.bikeTopInfo}>{bikeDetailContent}</div>
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
