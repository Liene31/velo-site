import { useOutletContext } from "react-router-dom";
import styles from "./BikeSpecs.module.css";

export function Features() {
  const { currentBike } = useOutletContext();

  return (
    <div className={styles.specDetails}>
      {currentBike ? (
        <ul>
          <li>
            <span>Other:</span> {currentBike.specs.features.other.join(", ")}
          </li>
        </ul>
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
}
