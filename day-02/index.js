"use strict";

console.log("day 2");

// ? let and const are called specifies
//? variables are used to store data
//? let is used to declare a variable that can be changed later
//? const is used to declare a variable that cannot be changed later

//*var - is function scope
//*let - is block scope
//*const - is block scope and cannot be changed later

const address = "123 Main St, New York, NY 10001";

let name = "John Doe";
name = "raphael";

console.log(name);

console.log(address);
// This will throw an error because address is a const variable

let village;

village;
