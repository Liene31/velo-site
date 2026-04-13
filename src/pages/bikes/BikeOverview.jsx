import { useEffect, useState } from "react";
import styles from "./BikeSpecs.module.css";
import { useParams } from "react-router-dom";

export function BikeOverview() {
  const [currentBike, setCurrentBike] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/data/bikes.json`)
      .then((res) => res.json())
      .then((data) => {
        const filteredBike = data.filter((bike) => {
          return bike.id === id;
        });
        //normalizing data since I know it will be always only one object
        setCurrentBike(filteredBike[0]);
      });
  }, []);

  return (
    <div className={styles.specDetails}>
      {currentBike ? (
        <ul>
          <li>
            <span>Brand:</span> {currentBike.overview.brand}
          </li>
          <li>
            <span>Category:</span> {currentBike.overview.category}
          </li>
          <li>
            <span>Model:</span> {currentBike.overview.model}
          </li>
          <li>
            <span>Year:</span> {currentBike.overview.year}
          </li>
          <li>
            <span>Colors:</span> {currentBike.overview.colors.join(", ")}
          </li>
          <li>
            <span>Sizes:</span> {currentBike.overview.sizes.join(", ")}
          </li>
          <li>
            <span>Currency:</span> {currentBike.overview.currency}
          </li>
          <li>
            <span>Price:</span> {currentBike.overview.price}
          </li>
          <li>
            <span>Description:</span> {currentBike.overview.description}
          </li>
        </ul>
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
}
