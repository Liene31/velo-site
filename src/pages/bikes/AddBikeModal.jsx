import styles from "./AddBikeModal.module.css";
import { AddBikeForm } from "./AddBikeForm";

export function AddBikeModal(props) {
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
            //uses handleModal from AdminBikes to flip true/false
            onClick={props.onClick}
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
