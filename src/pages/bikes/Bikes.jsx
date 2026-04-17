import styles from "./Bikes.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function Bikes() {
  const [bikes, setBikes] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    fetch("/data/bikes.json")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);

  const bikeElement = bikes?.map((bike) => {
    return (
      <Link className={styles.bikeCard} to={bike.id} key={bike.id}>
        <i className={styles.bikeType}>{bike.overview.category}</i>
        <img
          className={styles.bikeImg}
          src={bike.images[0].url}
          alt={bike.images[0].alt}
        />
        <h2>{bike.name}</h2>
        <p>
          {bike.overview.currency} {bike.overview.price}
        </p>
      </Link>
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
      </div>
      <div className={styles.bikesWrapper}>
        {bikes ? bikeElement : <h2>Loading</h2>}
      </div>
    </main>
  );
}
