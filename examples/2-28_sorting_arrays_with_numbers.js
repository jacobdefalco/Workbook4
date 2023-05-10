"use strict";
let numbers = [14, 99, 7, 36, 160, 2];

function compareAscendingNumber(a, b) {
  if (a < b) return -1; // right order
  else if (a == b) return 0; // same values
  else return 1; // swap, wrong order
}

numbers.sort(compareAscendingNumber);
console.log(numbers);

console.log(`======================`);

let numbers2 = [14, 99, 7, 36, 160, 2];

numbers2.sort(function (a, b) {
  if (a > b) return -1; // right order
  else if (a == b) return 0; // same values
  else return 1; // swap, wrong order
});
console.log(numbers2);

console.log(`======================`);
