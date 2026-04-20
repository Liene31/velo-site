import { useState } from "react";
import styles from "./BikeSpecs.module.css";
import { Build } from "./Build";
import { GroupSet } from "./GroupSet";
import { Wheels } from "./Wheels";

export function BikeSpecs() {
  const [activeTab, setActiveTab] = useState("build");

  function handleTabs(tab) {
    setActiveTab(tab);
  }
  return (
    <div className={styles.specWrapper}>
      <ul className={styles.specOptions}>
        <li>
          <button onClick={() => handleTabs("build")}>Build</button>
        </li>
        <li>
          <button onClick={() => handleTabs("groupSet")}>Group Set</button>
        </li>
        <li>
          <button onClick={() => handleTabs("wheels")}>Wheels</button>
        </li>
      </ul>

      <div className={styles.specDetails}>
        {activeTab === "build" && <Build />}
        {activeTab === "groupSet" && <GroupSet />}
        {activeTab === "wheels" && <Wheels />}
      </div>
    </div>
  );
}
