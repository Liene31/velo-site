import styles from "./BikeModal.module.css";
import { BikeForm } from "./BikeForm";

export function BikeModal(props) {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <div>
            <h2>{props.selectedBike ? "Update Bike" : "Add New Bike"}</h2>
            <p>
              {props.selectedBike
                ? "Update existing bike."
                : "Create a new bike entry for the catalog."}
            </p>
          </div>

          <button
            type="button"
            className={styles.closeBtn}
            aria-label="Close modal"
            //uses handleModal from AdminBikes to flip true/false
            onClick={props.onClose}
          >
            ×
          </button>
        </div>

        <div className={styles.modalContent}>
          <BikeForm
            onSuccess={props.onSuccess}
            selectedBike={props.selectedBike}
          />
        </div>
      </div>
    </div>
  );
}
