"use strict";
let lunchItems = [
  { item: "Steak Fajitas", price: 9.95 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Sweet Tea", price: 2.79 },
];

function getTotal(meal) {
  let sum = 0;
  for (let i = 0; i < meal.length; i++) {
    let item = meal[i];
    sum += item.price;
  }
  return sum;
}

let subtotal = getTotal(lunchItems);
let tax = subtotal * 0.07;
let tip = subtotal * 0.18;
let total = subtotal + tax + tip;
console.log(`Subtotal: $${subtotal.toFixed(2)}`);
console.log(`--------------`);
console.log(`Tax: $${tax.toFixed(2)}`);
console.log(`--------------`);
console.log(`Tip: $${tip.toFixed(2)}`);
console.log(`--------------`);
console.log(`Total $${total.toFixed(2)}`);
