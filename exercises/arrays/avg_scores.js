"use strict";
let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores) {
  let sum = 0;
  for (let index = 0; index < scores.length; index++) {
    sum += scores[index];
  }
  return sum / scores.length;
}

console.log(`My average test score: ${getAverage(myScores).toFixed(2)}%`);
console.log(`==============AND=============`);
console.log(`Your average test score: ${getAverage(yourScores).toFixed(2)}%`);
