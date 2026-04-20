import { useOutletContext } from "react-router-dom";
import styles from "./BikeSpecs.module.css";

export function GroupSet() {
  const { currentBike } = useOutletContext();

  return (
    <div className={styles.specDetails}>
      {currentBike ? (
        <ul>
          <li>
            <span>Rear derailleur:</span>{" "}
            {currentBike.specs.groupSet.rearDerailleur}
          </li>
          <li>
            <span>Crank:</span> {currentBike.specs.groupSet.crank}
          </li>
          <li>
            <span>Shifters:</span> {currentBike.specs.groupSet.shifters}
          </li>
          <li>
            <span>Cassette:</span> {currentBike.specs.groupSet.cassette}
          </li>
          <li>
            <span>Chain:</span> {currentBike.specs.groupSet.chain}
          </li>
          <li>
            <span>Brakes:</span> {currentBike.specs.groupSet.brakes}
          </li>
          <li>
            <span>BrakeLevers:</span> {currentBike.specs.groupSet.brakeLevers}
          </li>
        </ul>
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
}
