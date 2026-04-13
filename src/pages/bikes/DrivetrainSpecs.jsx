import { useOutletContext } from "react-router-dom";

export function DrivetrainSpecs() {
  const { currentBike } = useOutletContext();

  if (!currentBike) return <h2>Loading...</h2>;

  console.log(currentBike);
  return (
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
        printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the
        1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
      </li>
    </ul>
  );
}
