import React from "react";
import "./Ship.css";

// ship needs to have an id, hitcount, and maybe be aware of
// its placement

// needs to control its own internal data structure and
// be responsible for its UI/ graphical representation

// needs to take a type. To mitigate inspect cheating,
// will place faux ships to handle empty sea grids
function Ship({ id, type, shipSize, handleDestroyed, wasClicked }) {
  let shipId = id;
  let [hitCount, setHitCount] = React.useState(shipSize);
  let [isDestroyed, setIsDestroyed] = React.useState(false);

  const handleHit = () => {
    if (hitCount === 0) {
      setIsDestroyed(true);
      handleDestroyed(true);
    }
    setHitCount(hitCount - 1);
  };

  let className = "point--hidden";

  if (wasClicked && id !== "X") {
    className = "point--hit";
  } else if (wasClicked && id === "X") {
    className = "point--miss";
  }
  return (
    <h4 className={className}>
      {wasClicked ? `I AM SHIP: ${id || "A"}` : "No cheating"}
    </h4>
  );
}

export default Ship;
