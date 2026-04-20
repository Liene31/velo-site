import styles from "./AddBikeModal.module.css";
import { AddBikeForm } from "./AddBikeForm";

export function AddBikeModal() {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <div>
            <h2>Add New Bike</h2>
            <p>Create a new bike entry for the catalog.</p>
          </div>

          <button
            type="button"
            className={styles.closeBtn}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div className={styles.modalContent}>
          <AddBikeForm />
        </div>
      </div>
    </div>
  );
}
