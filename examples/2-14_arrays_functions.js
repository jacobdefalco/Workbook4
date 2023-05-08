"use strict";

// returns an array of names
function getKids() {
  let kids = ["Natalie", "Brittany", "Zachary"];
  return kids;
}

// displays data in an array of names
function displayKids(kids) {
  let numKids = kids.length;
  for (let i = 0; i < numKids; i++) {  //start at 0. repeat until you reach the number of kids (3). incrimenting every time
    console.log(kids[i]); //log the name at the respective indox place
  }
}

let ourKids = getKids(); // returns an array
displayKids(ourKids); // pass an array
