import { useOutletContext } from "react-router-dom";
import styles from "./BikeSpecs.module.css";

export function Components() {
  const { currentBike } = useOutletContext();

  return (
    <div className={styles.specDetails}>
      {currentBike ? (
        <ul>
          <li>
            <span>Saddle:</span> {currentBike.specs.components.saddle}
          </li>
        </ul>
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
}
