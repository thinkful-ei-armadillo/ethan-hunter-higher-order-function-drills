'use strict';

function hazardWarningCreator(typeOfWarning) {

  let warningCounter = 0;

  return function (location) {
    warningCounter++;

    console.log(`Danger!There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  };
}

const the_answer = hazardWarningCreator('snow');

the_answer('new york');
the_answer('new york');
