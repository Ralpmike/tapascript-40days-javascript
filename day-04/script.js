console.log("Day 04");

let catchingBus = false;

if (catchingBus) {
  console.log("I will Reach home on time");
} else {
  console.log("I will be late to reach");
}

catchingBus
  ? console.log("I will Reach home on time")
  : console.log("I will be late to reach");

let age = 8;

if (age >= 18) {
  console.log("You are Eligible to Vote");
} else {
  console.log("You are NOT Eligible to Vote");
}

// Let's build a grading system
// if score is >= 90, Grade A
// if score if >= 80, Grade B
// If score if >= 70, Grade C
// Fail

let score = 76;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else if (score < 70) {
  console.log("Fail");
}

let x = 0;

if (x === 0) {
  console.log(0);
} else if (x >= 0) {
  console.log("Greater than 0");
} else if (x <= 0) {
  console.log("Less than 0");
}

const condition = false;
const innerCondition = false;

if (condition) {
  console.log("Outer if");
  if (innerCondition) {
    console.log("Inner if");
  } else {
    console.log("Inner else");
  }
} else {
  console.log("Outer else");
}

/*else {
    console.log("I am alone else")
}*/

let position = 10;

switch (position) {
  case 1:
    console.log("Print 1");
    break;
  case 2:
    console.log("Print 2");
    break;
  case 3:
    console.log("Print 3");
    break;
  case 4:
    console.log("Print 4");
    break;

  default:
    console.log("Nothing is matched");
}

let day = 51;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Invalid Day Number");
}

let name = "Google";

switch (name) {
  case "tapaScript":
    console.log("Teaching 40 days of Js");
    break;
  case "google":
    console.log("Giving answer to all searches");
    break;
  default:
    console.log("You are neither google, nor tapaScript!");
}

const city = "Bangalore";
switch (city) {
  case "Bangalore":
  case "Kolkata":
  case "Agra":
  case "Jaipur":
    console.log("All these are in India");
    break;
  case "New York":
  default:
    console.log("It is in USA");
}

console.log("2015" == 2015); // true

let year = "2015";

if (year === 2015) console.log("true; it is equal");

console.log(undefined || 0 || "" || 1);
console.log(1 && 2 && 3 && 1);

console.log(!!1);
console.log(Boolean(!!1));

let y;

console.log((y = (1 && 2) ?? 3));

let i = 0;

for (i; i < 3; i++) {
  console.log("understand how it works");
}

// let sum = 0;

// while (true) {
//   let value = +prompt("Enter a number", "");

//   if (!value) break; // (*)

//   sum += value;
// }
// alert("Sum: " + sum);

for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  console.log(i); // 1, then 3, 5, 7, 9
}

//? A way to break from the external loop of a for loop
Freak: for (i = 0; i < 4; i++) {
  for (let index = 0; index < 10; index++) {
    if (i + index == 3) break Freak;

    console.log(i + index);
  }
}
// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;

//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Okay we support these browsers too");
//     break;

//   default:
//     alert("We hope that this page looks ok!");
// }

let browser = "Edge";

if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  console.log("Okay we support these browsers too");
} else if (browser === "Edge") {
  console.log("You've got the Edge!");
} else console.log("We hope that this page looks ok!");

function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) {
      continue;
    }

    console.log(i); // a prime
  }
}

function isPrime(i) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) return false;
  }

  return true; // a prime
}

showPrimes(6);

function checkAge(age) {
  // if (age > 18) {
  //   return true;
  // } else {
  //   return "Did parents allow you?";
  // }
  // const result = age > 18 ? true : "Did parents allow you?";
  const result = age > 18 || "Did parents allow you?";

  return result;
}

console.log(checkAge(19));

function min(a, b) {
  // if (a<b){
  //   return a
  // }else{
  //   return b
  // }
  return a < b ? a : b;
}

console.log(min(2, 7));

function power(a, n) {
  let result = a;
  for (let i = 1; i < n; i++) {
    result *= a;
  }

  return result;
}

console.log(power(7, 2));
