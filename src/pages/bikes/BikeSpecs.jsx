import { useState } from "react";
import styles from "./BikeSpecs.module.css";
import { DrivetrainSpecs } from "./DrivetrainSpecs";

export function BikeSpecs() {
  const [activeTab, setActiveTab] = useState("General");

  function handleTabs(tab) {
    setActiveTab(tab);
  }
  return (
    <div className={styles.specWrapper}>
      <ul className={styles.specOptions}>
        <li>
          <button onClick={() => handleTabs("Drivetrain")}>Drivetrain</button>
        </li>
        <li>
          <button onClick={() => handleTabs("Frame")}>Frame</button>
        </li>
        <li>
          <button onClick={() => handleTabs("Components")}>Components</button>
        </li>
      </ul>

      <div className={styles.specDetails}>
        {activeTab === "Drivetrain" && <DrivetrainSpecs />}
      </div>
    </div>
  );
}
