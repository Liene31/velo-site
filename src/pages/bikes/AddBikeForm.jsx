import styles from "./AddBikeForm.module.css";

export function AddBikeForm() {
  function handleFormSubmit(formData) {
    const data = Object.fromEntries(formData.entries());

    const payload = {
      slug: data.slug,
      name: data.name,
      overview: {
        brand: data.brand,
        model: data.model,
        year: data.year,
        category: data.category,
        price: data.price,
        currency: data.currency,
        colors: data.colors,
        size: data.size,
        description: data.description,
        inStock: data.inStock,
      },
      specs: {
        build: {
          frame: data.frame,
          fork: data.fork,
          bottomBracket: data.bottomBracket,
          headset: data.headset,
          stem: data.stem,
          handlebar: data.handlebar,
          saddle: data.saddle,
          seatPost: data.seatPost,
          pedals: data.pedals,
          grips: data.grips,
        },
        groupSet: {
          rearDerailleur: data.rearDerailleur,
          crank: data.crank,
          shifters: data.shifters,
          cassette: data.cassette,
          chain: data.chain,
          brakes: data.brakes,
          brakeLevers: data.brakeLevers,
        },
        wheels: {
          rims: data.rims,
          spokes: data.spokes,
          frontHub: data.frontHub,
          rearHub: data.rearHub,
          tires: data.tires,
        },
      },
      bikeUrl: data.bikeUrl,
    };
    console.log(payload);
  }

  return (
    <form action={handleFormSubmit} className={styles.AddBikeForm}>
      <div className={styles.formGroup}>
        <label htmlFor="slug">Slug *</label>
        <input
          id="slug"
          name="slug"
          type="text"
          placeholder="scott-speedster-30-2025"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="name">Name *</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Scott Speedster 30"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="brand">Brand *</label>
        <input
          id="brand"
          name="brand"
          type="text"
          placeholder="Scott"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="model">Model *</label>
        <input
          id="model"
          name="model"
          type="text"
          placeholder="Speedster 30"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="year">Year *</label>
        <input
          id="year"
          name="year"
          type="number"
          placeholder="2025"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="category">Category *</label>
        <select id="category" name="category" required defaultValue="">
          <option value="" disabled>
            --Please choose a category--
          </option>
          <option value="road">road</option>
          <option value="ebike">ebike</option>
          <option value="gravel">gravel</option>
          <option value="longtail">longtail</option>
          <option value="folded">folded</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="price">Price *</label>
        <input
          id="price"
          name="price"
          type="number"
          placeholder="1399"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="currency">Currency</label>
        <select id="currency" name="currency" defaultValue="eur">
          <option value="eur">EUR</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="colors">Colors *</label>
        <input
          id="colors"
          name="colors"
          type="text"
          placeholder="Black, Red"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="size">Size *</label>
        <input
          id="size"
          name="size"
          type="text"
          placeholder="XS, S, M"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="description">Description *</label>
        <textarea
          id="description"
          name="description"
          type="text"
          placeholder="Description of the bike"
          required
        ></textarea>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="inStock">In Stock *</label>
        <select id="inStock" name="inStock" defaultValue="false">
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="frame">Frame</label>
        <input
          id="frame"
          name="frame"
          type="text"
          placeholder="Topstone Carbon"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="fork">Fork</label>
        <input id="fork" name="fork" type="text" placeholder="Lefty Oliver" />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="bottomBracket">Bottom Bracket</label>
        <input
          id="bottomBracket"
          name="bottomBracket"
          type="text"
          placeholder="Shimano BSA 68"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="headset">Headset</label>
        <input
          id="headset"
          name="headset"
          type="text"
          placeholder="Integrated"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="stem">Stem</label>
        <input id="stem" name="stem" type="text" placeholder="Cannondale 2" />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="handlebar">Handlebar</label>
        <input
          id="handlebar"
          name="handlebar"
          type="text"
          placeholder="Handlebar 2 ShortDrop"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="saddle">Saddle</label>
        <input
          id="saddle"
          name="saddle"
          type="text"
          placeholder="Fizik Terra Argo X5"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="seatPost">Seat Post</label>
        <input
          id="seatPost"
          name="seatPost"
          type="text"
          placeholder="Cannondale DownLow Dropper Post"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="pedals">Pedals</label>
        <input
          id="pedals"
          name="pedals"
          type="text"
          placeholder="Description"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="grips">Grips</label>
        <input
          id="grips"
          name="grips"
          type="text"
          placeholder="Cannondale Bar Tape"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="rearDerailleur">Rear Derailleur</label>
        <input
          id="rearDerailleur"
          name="rearDerailleur"
          type="text"
          placeholder="Shimano GRX 822"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="crank">Crank</label>
        <input
          id="crank"
          name="crank"
          type="text"
          placeholder="Shimano GRX 610"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="shifters">Shifters</label>
        <input
          id="shifters"
          name="shifters"
          type="text"
          placeholder="Shimano GRX 820"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="cassette">Cassette</label>
        <input
          id="cassette"
          name="cassette"
          type="text"
          placeholder="Shimano SLX M7100"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="chain">Chain</label>
        <input
          id="chain"
          name="chain"
          type="text"
          placeholder="Shimano HG M7100"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="brakes">Brakes</label>
        <input
          id="brakes"
          name="brakes"
          type="text"
          placeholder="Shimano GRX 820 hydraulic disc"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="brakeLevers">Brake Levers</label>
        <input
          id="brakeLevers"
          name="brakeLevers"
          type="text"
          placeholder="Shimano GRX 820"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="rims">Rims</label>
        <input id="rims" name="rims" type="text" placeholder="DT Swiss G 540" />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="spokes">Spokes</label>
        <input
          id="spokes"
          name="spokes"
          type="text"
          placeholder="Stainless Steel"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="frontHub">Front Hub</label>
        <input
          id="frontHub"
          name="frontHub"
          type="text"
          placeholder="Lefty 50"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="rearHub">Rear Hub</label>
        <input
          id="rearHub"
          name="rearHub"
          type="text"
          placeholder="Shimano TC500"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="tires">Tires</label>
        <input
          id="tires"
          name="tires"
          type="text"
          placeholder="Vittoria Mezcal"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="bikeUrl">Bike Image</label>
        <input
          id="bikeUrl"
          name="bikeUrl"
          type="text"
          placeholder="https://asset.scott-sports.com"
        />
      </div>

      <button type="submit" className={styles.formBtn}>
        Submit
      </button>
    </form>
  );
}
