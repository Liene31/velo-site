import { useOutletContext } from "react-router-dom";
import styles from "./BikeSpecs.module.css";

export function Wheels() {
  const { currentBike } = useOutletContext();

  return (
    <div className={styles.specDetails}>
      {currentBike ? (
        <ul>
          <li>
            <span>Rims:</span> {currentBike.specs.wheels.rims}
          </li>
          <li>
            <span>Spokes:</span> {currentBike.specs.wheels.spokes}
          </li>
          <li>
            <span>Front Hub:</span> {currentBike.specs.wheels.frontHub}
          </li>
          <li>
            <span>Rear Hub:</span> {currentBike.specs.wheels.rearHub}
          </li>
          <li>
            <span>Tires:</span> {currentBike.specs.wheels.tires}
          </li>
        </ul>
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
}
