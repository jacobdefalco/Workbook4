"use strict";
let products = [
  { prodId: 1423, item: "Notepads (12 pk)", price: 12.29 },
  { prodId: 9999, item: "Highlighters (6 pk)", price: 9.99 },
  { prodId: 4, item: "Black Pens (12 pk)", price: 5.74 },
  { prodId: 79, item: "Stapler", price: 17.79 },
];

console.log(`=======Products Sorted by Name=====`);
products.sort(function (a, b) {
  if (a.item < b.item) return -1;
  else if (a.item == b.item) return 0;
  else return 1;
});
console.log(products);

console.log(`=======Products Sorted by prodID=====`);
products.sort(function (a, b) {
  return a.prodId - b.prodId;
});
console.log(products);

console.log(`=======Products Sorted by price=====`);
products.sort(function (a, b) {
  return a.price - b.price;
});
console.log(products);
