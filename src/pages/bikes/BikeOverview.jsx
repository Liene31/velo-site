import { useOutletContext } from "react-router-dom";
import styles from "./BikeSpecs.module.css";

export function BikeOverview() {
  const { currentBike } = useOutletContext();

  console.log(currentBike);

  return (
    <div className={styles.specDetails}>
      {
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
      }
    </div>
  );
}
