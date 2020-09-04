import React from "react";

import { DESTROYED_SHIP, MISSED, LOST, WON } from "../actions";
import Sea from "./Sea";
import Message from "./Message";
/*
  Need to create 8 ships, but the type need to be randomized
  Sea componenet should be in charge of ship generation

*/

// constant variables to control game logic
const SHIP_COUNT = 8;
const ROWS = 10;
const COLS = 10;
const MISSED_COUNT = 12;

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

function Game() {
  // set initial state
  let [gameState, setGameState] = React.useState(initailState);

  function reducer(action) {
    console.log("Reducer called");
    console.log(action);
    switch (action.type) {
      case DESTROYED_SHIP:
        return setGameState({
          ...gameState,
          shipCount: gameState.shipCount - 1,
        });
      case MISSED:
        let newState = {
          ...gameState,
          missCount: gameState.missCount + 1,
        };
        return setGameState(newState);
      case LOST:
        return setGameState({ ...gameState, isLose: true });
      case WON:
        return setGameState({ ...gameState, isWin: true });
      default:
        throw new Error("reducer broke");
    }
  }
  // initial game, need to call dispatch to update the sea

  // game logic keeps track of misscount and shipcount
  // these will need to be passed down to the sea, then to ship
  // sea will check if theres something in its grid
  // then use the ships own logic to update that ships hitCount
  // if ship is destroyed, call dispatch to decrement ship count
  // update sea, and continue

  const handleMiss = (missed) => reducer(missed);
  const handleDestroyed = (destroyed) => reducer(destroyed);

  return (
    <>
      <div>
        <h3>
          Missed Shot Count: {gameState.missCount}, Ship Count:{" "}
          {gameState.shipCount}
        </h3>
      </div>
      <Sea
        handleMiss={handleMiss}
        handleDestroyed={handleDestroyed}
        rows={ROWS}
        cols={COLS}
        shipCount={SHIP_COUNT}
      />
      <Message />
    </>
  );
}

export default Game;
