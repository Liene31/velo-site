import { useOutletContext } from "react-router-dom";
import styles from "./BikeSpecs.module.css";

export function Build() {
  const { currentBike } = useOutletContext();

  return (
    <>
      {
        <ul>
          <li>
            <span>Frame:</span> {currentBike.specs.build.frame}
          </li>
          <li>
            <span>Fork:</span> {currentBike.specs.build.fork}
          </li>
          <li>
            <span>Bottom bracket:</span>
            {currentBike.specs.build.bottomBracket}
          </li>
          <li>
            <span>Headset:</span> {currentBike.specs.build.headset}
          </li>
          <li>
            <span>Stem:</span> {currentBike.specs.build.stem}
          </li>
          <li>
            <span>Handlebar:</span> {currentBike.specs.build.handlebar}
          </li>
          <li>
            <span>Saddle:</span> {currentBike.specs.build.saddle}
          </li>
          <li>
            <span>Seat post:</span> {currentBike.specs.build.seatPost}
          </li>
          <li>
            <span>Pedals:</span> {currentBike.specs.build.pedals}
          </li>
          <li>
            <span>Grips:</span> {currentBike.specs.build.grips}
          </li>
        </ul>
      }
    </>
  );
}
