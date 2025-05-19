"use strict";
const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello();
person.sayHelloArrow();

const user1 = { name: "Alex", age: undefined };
console.log(user1.age ?? "Not provided");

const user = {
  name: "tapaScript",
  greet: function () {
    const hello = () => {
      console.log(`Hello, ${this.name}!`);
    };

    hello();
  },
};

user.greet();

function electricityBillCalculation(unitsPerday, paymentmethod) {
  const costPerUnit = 150;
  const daysInAMonth = 30;
  const monthsInAYear = 12;

  const costPerMonth = costPerUnit * unitsPerday * daysInAMonth;
  const annualBill = costPerMonth + monthsInAYear;
  const percentDiscount = 0.2;
  const discount = Math.ceil(annualBill * percentDiscount);

  console.log(annualBill, discount, "annual bill and discount");

  const bill =
    paymentmethod === "month"
      ? costPerMonth
      : paymentmethod === "year"
      ? annualBill - discount
      : "";

  return `Your bill for this ${
    paymentmethod === "month" ? "month" : "year"
  }: $${bill}`;
}

const result = electricityBillCalculation(2, "year");

console.log(result);

let num = 6789;

let reversed = 0;

console.log(num % 10, "last digit");
while (num > 0) {
  debugger;
  let lastDigit = num % 10;
  reversed = reversed * 10 + lastDigit;
  num = Math.floor(num / 10);
  console.log(reversed, "reversed");
}
