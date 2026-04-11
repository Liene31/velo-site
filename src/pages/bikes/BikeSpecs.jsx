import styles from "./BikeSpecs.module.css";

export function BikeSpecs() {
  return (
    <div className={styles.specWrapper}>
      <ul className={styles.specOptions}>
        <li>
          <button>General</button>
        </li>
        <li>
          <button>Frame</button>
        </li>
        <li>
          <button>Components</button>
        </li>
        <li>
          <button>Drivetrain</button>
        </li>
      </ul>

      <div className={styles.specDetails}>
        <ul>
          <li>
            <span>Brand:</span> Trek
          </li>
          <li>
            <span>Year:</span> 2026
          </li>
          <li>
            <span>Type:</span> Road Bike
          </li>
          <li>
            <span>Intended use:</span> Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </li>
        </ul>
      </div>
    </div>
  );
}
