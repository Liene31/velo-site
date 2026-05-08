import { useState } from "react";
import { bikeService } from "../../services/bike.service.js";
import styles from "./AddBikeForm.module.css";

export function AddBikeForm(props) {
  //here it's set to false since the form isn’t submitting when the component loads
  //loading should only be true during submission
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const bikeDetails = props.selectedBike;

  //NEED TO CLEAR THE FORM WHEN PRESSING ADD OTHERWISE IT KEEPS THE EDIT DATA !!!

  //collects data from user input
  //and sends in payload to DB
  const handleFormSubmit = async (formData) => {
    //submit btn is pressed, loading can start
    setIsLoading(true);
    //reset the old error when submitting again
    //otherwise an old error may stay visible
    setError(null);

    const data = Object.fromEntries(formData.entries());

    const payload = {
      slug: data.slug,
      tags: data.tags,
      name: data.name,
      overview: {
        brand: data.brand,
        model: data.model,
        year: data.year,
        category: data.category,
        price: data.price,
        currency: data.currency,
        colors: data.colors,
        sizes: data.size,
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

    try {
      const response = await bikeService.insert(payload);
      //success -> stop loading
      setIsLoading(false);
      //setShowModal, setShowToast, fetchBikes is triggered in parent component (AdminBikes)
      props.onSuccess();
    } catch (error) {
      if (error.response) {
        // server responded (e.g. 500 with "DB error")
        setError(error.response.data.message);
      } else if (error.request) {
        // request made but no response (server down / network issue)
        setError("Server unavailable, please try again later");
      } else {
        // something else went wrong
        setError("Unexpected error, please try again later");
      }
      setIsLoading(false);
    }
  };

  return (
    <form action={handleFormSubmit} className={styles.addBikeForm}>
      {/* BASIC INFO */}
      <details className={styles.formSection}>
        <summary>Basic Info</summary>
        <div className={styles.sectionContent}>
          <div className={styles.formGroup}>
            <label htmlFor="slug">Slug *</label>
            <input
              id="slug"
              name="slug"
              type="text"
              placeholder="scott-speedster-30-2025"
              defaultValue={bikeDetails?.slug || ""}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="tags">Tags *</label>
            <input
              id="tags"
              name="tags"
              type="text"
              placeholder="road, city"
              defaultValue={bikeDetails?.tags || ""}
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
              defaultValue={bikeDetails?.name || ""}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="bikeUrl">Image *</label>
            <input
              id="bikeUrl"
              name="bikeUrl"
              type="text"
              placeholder="https://asset.scott-sports.com"
              defaultValue={bikeDetails?.bikeUrl || ""}
              required
            />
          </div>
        </div>
      </details>

      {/* OVERVIEW */}
      <details className={styles.formSection}>
        <summary>Overview</summary>

        <div className={styles.sectionContent}>
          <div className={styles.formGroup}>
            <label htmlFor="brand">Brand *</label>
            <input
              id="brand"
              name="brand"
              type="text"
              placeholder="Scott"
              defaultValue={bikeDetails?.overview?.brand || ""}
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
              defaultValue={bikeDetails?.overview?.model || ""}
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
              defaultValue={bikeDetails?.overview?.year || ""}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="category">Category *</label>
            <select
              id="category"
              name="category"
              required
              defaultValue={bikeDetails?.overview?.category || ""}
            >
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
              defaultValue={bikeDetails?.overview?.price || ""}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="currency">Currency</label>
            <select
              id="currency"
              name="currency"
              defaultValue={bikeDetails?.overview?.currency || ""}
            >
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
              defaultValue={bikeDetails?.overview?.colors || ""}
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
              defaultValue={bikeDetails?.overview?.size || ""}
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
              defaultValue={bikeDetails?.overview?.description || ""}
              required
            ></textarea>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="inStock">In Stock *</label>
            <select
              id="inStock"
              name="inStock"
              defaultValue={bikeDetails?.overview?.inStock || ""}
            >
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
        </div>
      </details>

      {/* SPECS */}
      <details className={styles.formSection}>
        <summary>Specs</summary>

        {/* BUILD */}
        <details className={styles.innerSection}>
          <summary>Build</summary>

          <div className={styles.sectionContent}>
            <div className={styles.formGroup}>
              <label htmlFor="frame">Frame</label>
              <input
                id="frame"
                name="frame"
                type="text"
                placeholder="Topstone Carbon"
                defaultValue={bikeDetails?.specs?.build?.frame || ""}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="fork">Fork</label>
              <input
                id="fork"
                name="fork"
                type="text"
                placeholder="Lefty Oliver"
                defaultValue={bikeDetails?.specs?.build?.fork || ""}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="bottomBracket">Bottom Bracket</label>
              <input
                id="bottomBracket"
                name="bottomBracket"
                type="text"
                placeholder="Shimano BSA 68"
                defaultValue={bikeDetails?.specs?.build?.bottomBracket || ""}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="headset">Headset</label>
              <input
                id="headset"
                name="headset"
                type="text"
                placeholder="Integrated"
                defaultValue={bikeDetails?.specs?.build?.headset || ""}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="stem">Stem</label>
              <input
                id="stem"
                name="stem"
                type="text"
                placeholder="Cannondale 2"
                defaultValue={bikeDetails?.specs?.build?.stem || ""}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="handlebar">Handlebar</label>
              <input
                id="handlebar"
                name="handlebar"
                type="text"
                placeholder="Handlebar 2 ShortDrop"
                defaultValue={bikeDetails?.specs?.build?.handlebar || ""}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="saddle">Saddle</label>
              <input
                id="saddle"
                name="saddle"
                type="text"
                placeholder="Fizik Terra Argo X5"
                defaultValue={bikeDetails?.specs?.build?.saddle || ""}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="seatPost">Seat Post</label>
              <input
                id="seatPost"
                name="seatPost"
                type="text"
                placeholder="Cannondale DownLow Dropper Post"
                defaultValue={bikeDetails?.specs?.build?.seatPost || ""}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="pedals">Pedals</label>
              <input
                id="pedals"
                name="pedals"
                type="text"
                placeholder="Description"
                defaultValue={bikeDetails?.specs?.build?.pedals || ""}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="grips">Grips</label>
              <input
                id="grips"
                name="grips"
                type="text"
                placeholder="Cannondale Bar Tape"
                defaultValue={bikeDetails?.specs?.build?.grips || ""}
              />
            </div>
          </div>
        </details>

        {/* GROUPSET */}
        <details className={styles.innerSection}>
          <summary>Group Set</summary>

          <div className={styles.sectionContent}>
            <div className={styles.formGroup}>
              <label htmlFor="rearDerailleur">Rear Derailleur</label>
              <input
                id="rearDerailleur"
                name="rearDerailleur"
                type="text"
                placeholder="Shimano GRX 822"
                defaultValue={
                  bikeDetails?.specs?.groupSet?.rearDerailleur || ""
                }
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="crank">Crank</label>
              <input
                id="crank"
                name="crank"
                type="text"
                placeholder="Shimano GRX 610"
                defaultValue={bikeDetails?.specs?.groupSet?.crank || ""}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="shifters">Shifters</label>
              <input
                id="shifters"
                name="shifters"
                type="text"
                placeholder="Shimano GRX 820"
                defaultValue={bikeDetails?.specs?.groupSet?.shifters || ""}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="cassette">Cassette</label>
              <input
                id="cassette"
                name="cassette"
                type="text"
                placeholder="Shimano SLX M7100"
                defaultValue={bikeDetails?.specs?.groupSet?.cassette || ""}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="chain">Chain</label>
              <input
                id="chain"
                name="chain"
                type="text"
                placeholder="Shimano HG M7100"
                defaultValue={bikeDetails?.specs?.groupSet?.chain || ""}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="brakes">Brakes</label>
              <input
                id="brakes"
                name="brakes"
                type="text"
                placeholder="Shimano GRX 820 hydraulic disc"
                defaultValue={bikeDetails?.specs?.groupSet?.brakes || ""}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="brakeLevers">Brake Levers</label>
              <input
                id="brakeLevers"
                name="brakeLevers"
                type="text"
                placeholder="Shimano GRX 820"
                defaultValue={bikeDetails?.specs?.groupSet?.brakeLevers || ""}
              />
            </div>
          </div>
        </details>

        {/* WHEELS */}
        <details className={styles.innerSection}>
          <summary>Wheels</summary>

          <div className={styles.sectionContent}>
            <div className={styles.formGroup}>
              <label htmlFor="rims">Rims</label>
              <input
                id="rims"
                name="rims"
                type="text"
                placeholder="DT Swiss G 540"
                defaultValue={bikeDetails?.specs?.wheels?.rims || ""}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="spokes">Spokes</label>
              <input
                id="spokes"
                name="spokes"
                type="text"
                placeholder="Stainless Steel"
                defaultValue={bikeDetails?.specs?.wheels?.spokes || ""}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="frontHub">Front Hub</label>
              <input
                id="frontHub"
                name="frontHub"
                type="text"
                placeholder="Lefty 50"
                defaultValue={bikeDetails?.specs?.wheels?.frontHub || ""}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="rearHub">Rear Hub</label>
              <input
                id="rearHub"
                name="rearHub"
                type="text"
                placeholder="Shimano TC500"
                defaultValue={bikeDetails?.specs?.wheels?.rearHub || ""}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="tires">Tires</label>
              <input
                id="tires"
                name="tires"
                type="text"
                placeholder="Vittoria Mezcal"
                defaultValue={bikeDetails?.specs?.wheels?.tires || ""}
              />
            </div>
          </div>
        </details>
      </details>

      {error && (
        //role=alert -> using to communicate an important message to the user
        <p className={styles.errorMessage} role="alert">
          {error}
        </p>
      )}

      <button disabled={isLoading} type="submit" className={styles.formBtn}>
        {isLoading ? "Submitting...." : "Submit"}
      </button>
    </form>
  );
}
