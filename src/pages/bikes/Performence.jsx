import { useOutletContext } from "react-router-dom";
import styles from "./BikeSpecs.module.css";

export function Performance() {
  const { currentBike } = useOutletContext();

  return (
    <div className={styles.specDetails}>
      {currentBike ? (
        <ul>
          <li>
            <span>Brakes:</span> {currentBike.specs.performance.brakes}
          </li>
          <li>
            <span>Drivetrain:</span> {currentBike.specs.performance.drivetrain}
          </li>
          <li>
            <span>Tyres:</span> {currentBike.specs.performance.tyres}
          </li>
          <li>
            <span>Wheelset:</span> {currentBike.specs.performance.wheelset}
          </li>
        </ul>
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
}
