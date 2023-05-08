"use strict";

let personInfo = {
  name: "Jake DeFalco",
  address: "123 Cardboard Box Lane",
  city: "Pittsburgh",
  state: "Pennsylvania",
  zip: "12345",
};

let infoMessage = `
${personInfo.name}
${personInfo.address}
${personInfo.city}, ${personInfo.state} ${personInfo.zip}`;

console.log(infoMessage);
