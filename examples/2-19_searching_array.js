"use strict";
let teams = ["Red Sox", "White Sox", "Rangers", "Pirates", "Cardinals"];

let index = teams.indexOf("Rangers"); //returns 3

if (index == -1) {
  console.log("Item Not Found"); //if the string you are searching for is not found within the array, a "-1" gets returned
} else {
  console.log("I'm at position: " + index + "!");
}
