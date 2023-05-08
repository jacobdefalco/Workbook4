"use strict";
let family = ["Michael", "Melissa", "Zachary", "Jake", "Nico"]; //array is a collection of items

//establish variable at 0. loop until the # of loops = the length of the array (ZERO BASED). logging value after each time.
for (let i = 0; i < family.length; i++) {
  const value = family[i];
  console.log(`${i + 1}. ${value}`);
}
