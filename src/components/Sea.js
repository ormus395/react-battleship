import React from "react";
import "./Sea.css";

// Responsible for the grid logic that is the sea.
// display the sea to the user
// places ships, and handles all sea logic

// will take rows and cols
function Sea({ rows, cols }) {
  // need to create an internal data board/ grid that is the sea
  // but also need to create a UI version of this too
  let [sea, setSea] = React.useState(null);

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

  console.log(sea);

  // create ui interpretation;
  let gameBoard;

  if (sea) {
    gameBoard = sea.map((row) => {
      return (
        <div className="row">
          {row.map((col) => {
            let pointStyle = "point";
            console.log(col);
            return <div className={pointStyle}></div>;
          })}
        </div>
      );
    });
  }

  console.log(gameBoard);
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
