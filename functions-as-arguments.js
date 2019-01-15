'use strict';

const hello = () => {
  console.log('Hello world');
};

const goodbye = () => {
  console.log('Goodbye world');
};

const repeat = function (fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
};

repeat(hello, 5);
repeat(goodbye, 5);
