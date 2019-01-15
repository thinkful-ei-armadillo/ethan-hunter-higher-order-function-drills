'use strict';

const turtleMoves = [
  [0, 0],
  [0, 5],
  [-1, -3],
  [-3, 1],
  [2, -4],
  [3, 2],
];

const filtered = turtleMoves.filter((move) => {

  if (move[0] < 0 || move[1] < 0) {
    return false;
  } else {
    return true;
  }
});

const steps = filtered.map((move) => {

  return move[0] + move[1];
});


console.log(steps);
