import React from "react";
import "./Sea.css";

import Ship from "./Ship";
// Responsible for the grid logic that is the sea.
// display the sea to the user
// places ships, and handles all sea logic

/*
  generation will be random number between 1-3. 
  if 1, create small ship, if 2, create medium, if 3, create large ship
*/

const LITTLE_SHIP = 2;
const MEDIUM_SHIP = 3;
const LARGE_SHIP = 4;

// util function to create ship size
function generateShipSize() {
  let random = Math.floor(Math.random() * 3 + 1);

  switch (random) {
    case 1:
      return LITTLE_SHIP;
    case 2:
      return MEDIUM_SHIP;
    case 3:
      return LARGE_SHIP;
    default:
      return LITTLE_SHIP;
  }
}

function generateShip(size, type) {
  // size will handle shize of ship,
  // type will handle real ships, and faux ships
}

// will take rows and cols and ship count
function Sea({ rows, cols, shipCount }) {
  // need to create an internal data board/ grid that is the sea
  // but also need to create a UI version of this too
  let [sea, setSea] = React.useState(null);
  let [shipsPlaced, setShipsPlaced] = React.useState(false);

  // need to first create the data structure for the sea
  if (!sea) {
    // create multi dimensional array filled with ships;
    let board = [];

    // handles rows
    for (let r = 0; r < rows; r++) {
      // need to create an inner array of columns to push to row
      let inner = [];
      // handled cols
      for (let c = 0; c < cols; c++) {
        inner.push(null);
      }
      board.push(inner);
    }

    setSea(board);
  }

  // after the data structure for the sea was built
  // we need to place the ships.
  if (sea && !shipsPlaced) {
    // generate a ship, determine its verticality, and place it
    // on the board/ in our sea data structure
    console.log("place ships");
  }

  // console.log(sea);

  // create ui interpretation;
  let gameBoard;

  if (sea) {
    gameBoard = sea.map((row) => {
      return (
        <div className="row">
          {row.map((col) => {
            let pointStyle = "point";
            // console.log(col);
            return <div className={pointStyle}>{col}</div>;
          })}
        </div>
      );
    });
  }

  // console.log(gameBoard);
  return (
    <div className="sea">
      <h3>I AM SEA</h3>
      <p>
        Rows: {rows}, Cols: {cols}
      </p>
      <div className="board">{gameBoard}</div>
    </div>
  );
}

export default Sea;
