"use strict";
let products = [
  { name: "Gummy Worms", price: 5.79 },
  { name: "Plain M&Ms", price: 2.89 },
  { name: "Peanut M&Ms", price: 2.19 },
  { name: "Swedish Fish", price: 3.99 },
  { name: "Reese's Cups", price: 5.99 },
  { name: "Twizzlers", price: 2.99 },
  { name: "Caramel M&Ms", price: 3.19 },
  { name: "Sour Gummy Worms", price: 3.49 },
  { name: "Skittles", price: 2.39 },
  { name: "Peanut Butter M&Ms", price: 3.0 },
];

//if product price is under $4.00
for (let i = 0; i < products.length; i++) {
  const product = products[i];
  if (product.price < 4) {
    console.log(`${i}. ${product.name}`);
  }
}
console.log("========================");
//if product is a variety of M&Ms
for (let i = 0; i < products.length; i++) {
  const product = products[i];
  if (product.name.includes("M&Ms")) {
    console.log(product.name);
  }
}
console.log("========================");

//if one of the products is swedish fish

function isSwedishFish() {
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (product.name == "Swedish Fish") {
      return true;
    }
  }
  return false;
}
console.log(isSwedishFish(products));
