import { useState } from "react";
import styles from "./BikeSpecs.module.css";
import { Performance } from "./Performence";
import { Chassis } from "./Chassis";
import { Components } from "./Components";
import { Features } from "./Features";

export function BikeSpecs() {
  const [activeTab, setActiveTab] = useState("performance");

  function handleTabs(tab) {
    setActiveTab(tab);
  }
  return (
    <div className={styles.specWrapper}>
      <ul className={styles.specOptions}>
        <li>
          <button onClick={() => handleTabs("performance")}>Performance</button>
        </li>
        <li>
          <button onClick={() => handleTabs("chassis")}>Chassis</button>
        </li>
        <li>
          <button onClick={() => handleTabs("components")}>Components</button>
        </li>
        <li>
          <button onClick={() => handleTabs("features")}>Features</button>
        </li>
      </ul>

      <div className={styles.specDetails}>
        {activeTab === "performance" && <Performance />}
        {activeTab === "chassis" && <Chassis />}
        {activeTab === "components" && <Components />}
        {activeTab === "features" && <Features />}
      </div>
    </div>
  );
}
