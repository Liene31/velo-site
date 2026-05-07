import styles from "./Bikes.module.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AddBikeModal } from "./AddBikeModal";
import { bikeService } from "../../services/bike.service.js";

export function AdminBikes() {
  const [bikes, setBikes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    fetchBikes();
  }, []);

  const bikeElement = bikes?.map((bike) => {
    return (
      <div key={bike._id} className={styles.bikeCard}>
        <div className={styles.cardActions}>
          <button className={styles.deleteBtn}>
            <img src="/images/delete.svg" alt="delete icon" />
          </button>
          <button className={styles.editBtn}>
            <img src="/images/edit.svg" alt="edit icon" />
          </button>
        </div>

        <img
          className={styles.bikeImg}
          src={bike.bikeUrl}
          alt={`Image of bike ${bike.name}`}
        />

        <h2>{bike.name}</h2>
        <p>
          {bike.overview.currency} {bike.overview.price}
        </p>
      </div>
    );
  });

  //checks if no errors and data is loaded
  // if conditions are not met/or is met, shows appropriate message
  let bikeContent;

  if (error) {
    bikeContent = <p>{error}</p>;
  } else if (isLoading) {
    bikeContent = <p>Loading</p>;
  } else if (bikes.length === 0) {
    bikeContent = <p>No bikes found</p>;
  } else {
    bikeContent = bikeElement;
  }

  //makes this re-usable and can be called when needed
  function fetchBikes() {
    setIsLoading(true);
    setError(null);
    bikeService
      .getAll()
      .then((data) => {
        setBikes(data.bikes);
        setIsLoading(false);
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
  }

  function handleModal() {
    setShowModal((prev) => !prev);
  }

  function handleCloseBtn() {
    setShowToast(false);
  }

  function handleBikeAdded() {
    setShowModal(false);
    setShowToast(true);
    fetchBikes();
  }

  return (
    <main className={styles.bikesPage}>
      <h1 className={styles.bikesTitle}>{t("bikes.bikesTitle")}</h1>

      <div className={styles.bikeFilterBtn}>
        <button>Road</button>
        <button>E-bikes</button>
        <button>Gravel</button>
        <button>Longtail</button>
        <button>Folded</button>
        <button>Clear filters</button>
        <button onClick={handleModal} className={styles.addBikeBtn}>
          Add Bike
        </button>
      </div>
      <div className={styles.bikesWrapper}>
        <div className={styles.bikesWrapper}>{bikeContent}</div>
      </div>

      {/* Add Bike Modal */}
      <div>
        {showModal ? (
          <AddBikeModal onClose={handleModal} onSuccess={handleBikeAdded} />
        ) : null}
      </div>

      {/* This message appears after successfully adding the bike */}
      {showToast && (
        <div className={styles.toastWrapper} role="status">
          <button
            onClick={handleCloseBtn}
            type="button"
            className={styles.closeBtn}
            aria-label="Close successfully added bike message"
          >
            ×
          </button>
          <div className={styles.toast}>
            <span className={styles.toastIcon}>✔</span>
            <div>
              <p className={styles.toastTitle}>Bike added successfully</p>
              <p className={styles.toastText}>
                The new bike is now available in the catalog.
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
