import React from "react";

import Sea from "./Sea";

// constant variables to control game logic
const SHIP_COUNT = 8;
const ROWS = 10;
const COLS = 10;
const MISSED_COUNT = 12;
const LITTLE_SHIP = 2;
const MIDDLE_SHIP = 3;
const LARGE_SHIP = 4;

// action constants, cuz fuck having to type them out
const DESTROYED_SHIP = "destroyed_ship";
const MISSED = "missed";
const LOST = "lost";
const WON = "won";

// initial game state
const initailState = {
  // win state
  isWin: false,
  isLose: false,

  // check missCount for isLose condition
  missCount: 0,

  // shipCount, is no more ships? win game
  shipCount: SHIP_COUNT,
};

// reducer takes state, and action
// the action types will be
// destroyed ship, missed, lost, and won
function reducer(state, action) {
  switch (action.type) {
    case DESTROYED_SHIP:
      return { shipCount: state.shipCount + 1, ...state };
    case MISSED:
      return { missCount: state.missCount + 1, ...state };
    case LOST:
      return { isLose: true, ...state };
    case WON:
      return { isWin: true, ...state };
    default:
      throw new Error("reducer broke");
  }
}

function Game() {
  // set initial state
  let [gameState, dispatch] = React.useReducer(reducer, initailState);

  // initial game, need to call dispatch to update the sea

  // game logic keeps track of misscount and shipcount
  // these will need to be passed down to the sea, then to ship
  // sea will check if theres something in its grid
  // then use the ships own logic to update that ships hitCount
  // if ship is destroyed, call dispatch to decrement ship count
  // update sea, and continue

  return (
    <>
      <h3>I am GAME</h3>
      <Sea rows={ROWS} cols={COLS} />
    </>
  );
}

export default Game;
