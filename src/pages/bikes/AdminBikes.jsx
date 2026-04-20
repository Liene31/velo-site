import styles from "./Bikes.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function AdminBikes() {
  const [bikes, setBikes] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    fetch("/data/bikes.json")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);

  const bikeElement = bikes?.map((bike) => {
    return (
      <div key={bike.id} className={styles.bikeCard}>
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
          src={bike.images[0].url}
          alt={bike.images[0].alt}
        />

        <h2>{bike.name}</h2>
        <p>
          {bike.overview.currency} {bike.overview.price}
        </p>
      </div>
    );
  });

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
        <button className={styles.addBikeBtn}>Add Bike</button>
      </div>
      <div className={styles.bikesWrapper}>
        {bikes ? bikeElement : <h2>Loading</h2>}
      </div>
    </main>
  );
}
