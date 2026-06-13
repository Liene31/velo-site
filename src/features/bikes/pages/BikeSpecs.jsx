import { useState } from "react";
import styles from "./BikeSpecs.module.css";
import { Build } from "../components/Build";
import { GroupSet } from "../components/GroupSet";
import { Wheels } from "../components/Wheels";

export function BikeSpecs() {
  const [activeTab, setActiveTab] = useState("build");

  function handleTabs(tab) {
    setActiveTab(tab);
  }
  return (
    <div className={styles.specWrapper}>
      <ul className={styles.specOptions}>
        <li>
          <button
            //null instead of string ("") keeps the markup cleaner and might help prevent some potential issues
            className={activeTab === "build" ? styles.active : null}
            onClick={() => handleTabs("build")}
          >
            Build
          </button>
        </li>
        <li>
          <button
            className={activeTab === "groupSet" ? styles.active : null}
            onClick={() => handleTabs("groupSet")}
          >
            Group Set
          </button>
        </li>
        <li>
          <button
            className={activeTab === "wheels" ? styles.active : null}
            onClick={() => handleTabs("wheels")}
          >
            Wheels
          </button>
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
