'use strict';

const inputString = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
const inputArray = inputString.split(' ');

const output = inputArray.reduce((acc, word) => {

  if (word.length === 3) {
    acc += ' ';
  } else {
    acc += word[word.length-1].toUpperCase();
  }

  return acc;
}, '');

console.log(output);
