import { useEffect, useState } from "react";
import styles from "./BikeDetail.module.css";
import { NavLink, Link, Outlet, useParams } from "react-router-dom";
import { bikeService } from "../../../services/bike.service.js";
import { getErrorMessage } from "../../../utils/getErrorMessage";

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
      })
      .catch((err) => {
        //utility function
        setError(getErrorMessage(err));
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
          src={currentBike.bikeUrl}
          alt={`Image of bike ${currentBike.name}`}
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
      {/* Relative path indicates to go path back not to go back to parent */}
      {/* If it's just .. it would go back to home not to the /bikes */}
      <Link to=".." relative="path" className={styles.backButton}>
        &larr; <span>Back to all bikes</span>
      </Link>
      <div className={styles.bikeDetailWrapper}>
        <div className={styles.bikeTopInfo}>{bikeDetailContent}</div>
        {currentBike && (
          <>
            <nav className={styles.navLinks}>
              <NavLink to="." end>
                Overview
              </NavLink>
              <NavLink to="specs">Specs</NavLink>
              <NavLink to="photos">Photos</NavLink>
              <NavLink to="reviews">Reviews</NavLink>
            </nav>
            <div className={styles.detailContent}>
              <Outlet context={{ currentBike }} />
            </div>
          </>
        )}
      </div>
    </main>
  );
}
