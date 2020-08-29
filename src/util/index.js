export const randomGenerator = (number) => {
  let random = Math.floor(Math.random() * number + 1);

  return random;
};

export const willItFit = (row, col, size, isVert, sea) => {
  let itWillFit = true;

  if (sea[row][col] != null) {
    itWillFit = false;
  } else {
    if (isVert && row + size < 9) {
      for (let i = 0; i < size; i++) {
        if (sea[row + i][col] !== null) {
          itWillFit = false;
        }
      }
    } else if (!isVert && col + size < 9) {
      for (let i = 0; i < size; i++) {
        if (sea[row][col + i] !== null) {
          itWillFit = false;
        }
      }
    } else {
      itWillFit = false;
    }
  }

  return itWillFit;
};

export const generateShipSize = () => {
  let random = randomGenerator(3);
  const LITTLE_SHIP = 2;
  const MEDIUM_SHIP = 3;
  const LARGE_SHIP = 4;
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
};
