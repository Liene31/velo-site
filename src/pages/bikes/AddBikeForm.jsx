import styles from "./AddBikeForm.module.css";

export function AddBikeForm() {
  function handleFormSubmit(formData) {
    console.log(formData);

    const data = Object.fromEntries(formData.entries());

    const payload = {
      slug: data.slug,
      name: data.name,
      overview: {
        brand: data.brand,
        model: data.model,
      },
    };
    console.log(payload);
  }

  return (
    <form action={handleFormSubmit} className={styles.AddBikeForm}>
      <div className={styles.formGroup}>
        <label htmlFor="slug">Slug</label>
        <input
          id="slug"
          name="slug"
          type="text"
          placeholder="scott-speedster-30-2025"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Scott Speedster 30"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="brand">Brand</label>
        <input
          id="brand"
          name="brand"
          type="text"
          placeholder="Scott"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="model">Model</label>
        <input
          id="model"
          name="model"
          type="text"
          placeholder="Speedster 30"
          required
        />
      </div>

      <button type="submit" className={styles.formBtn}>
        Submit
      </button>
    </form>
  );
}
