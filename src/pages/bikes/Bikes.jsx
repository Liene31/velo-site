import styles from "./Bikes.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { bikeService } from "../../services/bike.service.js";

export function Bikes() {
  const [bikes, setBikes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
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
  }, []);

  const bikeElement = bikes?.map((bike) => {
    return (
      <Link className={styles.bikeCard} to={bike._id} key={bike._id}>
        <i className={styles.bikeType}>{bike.overview.category}</i>
        <img
          className={styles.bikeImg}
          src={bike.bikeUrl}
          alt={`Image of bike ${bike.name}`}
        />
        <h2>{bike.name}</h2>
        <p>
          {bike.overview.currency} {bike.overview.price}
        </p>
      </Link>
    );
  });

  //gets all the bike tags arrays in one array (nested array)
  const bikeTagArray = bikes?.map((bike) => {
    return bike.tags;
  });

  //flatten the nested array (transforms into one array)
  const flattenedTagArray = bikeTagArray.flat(Infinity);

  //create set of unique values using Set constructor.
  //it's an object
  const uniqueTags = new Set(flattenedTagArray);

  //convert the object back to array
  const uniqueTagsArray = [...uniqueTags];

  //display filter list
  const filterTags = uniqueTagsArray.map((tag) => {
    return (
      <option key={tag} value={tag}>
        {tag}
      </option>
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

  return (
    <main className={styles.bikesPage}>
      <h1 className={styles.bikesTitle}>{t("bikes.bikesTitle")}</h1>

      <section className={styles.filterBar}>
        <label htmlFor="bike-filter" className={styles.filterLabel}>
          Filter
        </label>

        <select
          id="bike-filter"
          className={styles.filterSelect}
          defaultValue="all"
        >
          <option value="all">All Bikes</option>
          {filterTags}
        </select>
      </section>
      <div className={styles.bikesWrapper}>{bikeContent}</div>
    </main>
  );
}
