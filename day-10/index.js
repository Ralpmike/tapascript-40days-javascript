//? Global scope

let myName = "Raphael";

console.log(myName + " this global scope");

function greetMe() {
  console.log(`Good evening ${myName}, this is function scoped`);
}

greetMe();

{
  console.log(myName + " this block scope");
}
