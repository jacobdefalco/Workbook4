"use strict";
let message = "This is my message"; //string
let amount = 69.69; // number
let isApproved = false; //boolean

// <input type="text" id="firstName" />
// let htmlElement = document.getElementById("firstName"); //obejext (generic)  HTMLElement (specific)

// object with multiple variables
let employee = {
  employeeId: 1,
  name: "Jake",
  jobTitle: "Application Developer",
  payRate: 38.59,
};

console.log(employee); //logs the whole "employee" object
console.log(employee.payRate); //dot notation (commonly used and PREFERRED)
console.log(employee["payRate"]); //bracket notation (not as commonly used)
console.log("============");

function printEmployee(employee) {
  console.log(employee.employeeId);
  console.log(employee.name);
  console.log(employee.jobTitle);
  console.log(employee.payRate);
}

printEmployee(employee);
