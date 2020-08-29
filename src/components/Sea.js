import React from "react";
import "./Sea.css";

import { generateShipSize, randomGenerator, willItFit } from "../util";

import Ship from "./Ship";
// Responsible for the grid logic that is the sea.
// display the sea to the user
// places ships, and handles all sea logic

/*
  generation will be random number between 1-3. 
  if 1, create small ship, if 2, create medium, if 3, create large ship
*/

// will take rows and cols and ship count
function Sea({ rows, cols, shipCount }) {
  // need to create an internal data board/ grid that is the sea
  // but also need to create a UI version of this too
  let [sea, setSea] = React.useState(null);
  let [shipsPlaced, setShipsPlaced] = React.useState(false);

  const placeShips = (sea) => {
    console.log(sea);
    let count = 0;
    let newSea = [...sea];

    while (count < shipCount) {
      // generate random origin, and ship details
      let randomRow = randomGenerator(rows) - 1;
      let randomCol = randomGenerator(cols) - 1;
      let id = count;
      let isVert = randomGenerator(2) > 1 ? true : false;
      let size = generateShipSize();
      // generate ship, ship needs id (will use number), cuz
      // there is only 8 ships

      // take coordinate, and first check if point is empty
      // if not empty, need to check if the

      if (willItFit(randomRow, randomCol, size, isVert, sea)) {
        // generate the ship and place it
        // increment shipsPlaced

        let ship = <Ship id={id} shipSize={size} wasClicked={false} />;

        if (isVert) {
          for (let i = 0; i < size; i++) {
            newSea[randomRow + i][randomCol] = ship;
          }
        } else {
          for (let i = 0; i < size; i++) {
            newSea[randomRow][randomCol + i] = ship;
          }
        }
        count++;
      }
    }

    setSea(newSea);
  };

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
    placeShips(sea);
    // verticality of ship will be random
    // we will create a util function to handle searching the
    // sea/ data structure, and determine if the ship will fit

    setShipsPlaced(true);
    console.log("Placed the ships");
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
            return (
              <div
                key={col ? col.id : randomGenerator(10000)}
                className={pointStyle}
              >
                {col}
              </div>
            );
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
