import { useOutletContext } from "react-router-dom";
import styles from "./BikeSpecs.module.css";

export function Chassis() {
  const { currentBike } = useOutletContext();

  return (
    <div className={styles.specDetails}>
      {currentBike ? (
        <ul>
          <li>
            <span>Fork:</span> {currentBike.specs.chassis.fork}
          </li>
          <li>
            <span>Frame:</span> {currentBike.specs.chassis.frame}
          </li>
        </ul>
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
}
