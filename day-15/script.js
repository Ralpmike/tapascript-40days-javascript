const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

const groupedInventory = Object.groupBy(inventory, ({ quantity }) =>
  quantity < 10 ? "Restock" : "Full"
);
console.log(groupedInventory);

// console.log(Object.entries(groupedInventory?.fruit));
// for (const data of groupedInventory.fruit.entries()) {
//   console.log(data);
// }

// for (const [i, { type, quantity, name }] of Object.entries(
//   groupedInventory.fruit
// )) {
//   if (name === "bananas") {
//     console.log(`There are ${quantity} of ${name} 🍌 left in the inventory`);
//   }
// }

//? reverse()

// reverse method is used to reverse an array. This method changes the original array.
{
  const names = ["tom", "alex", "bob"];
  console.log(names.reverse());

  names;
}

//* toReverse()
//
// toReversed() method is used to reverse an array. This method does not change the original array.

{
  const items = [1, 2, 3, 4, 5];
  const reversedItems = items.toReversed();
  reversedItems;
  items;
}

//? toSorted()

// toSorted() method is used to sort an array. This method changes the original array.

// {
const months = ["March", "Jan", "Feb", "Dec"];
const sortedMonths = months.toSorted();
sortedMonths;
months;
// }

const months2 = months.toSpliced(1, 0, "Aug");

months2;
months;

//*

{
  const numbers = [1, 2, 3, 4, 5];

  const newArray = numbers.with(2, 6);

  numbers;
  newArray;

  //? to update an array without modifying the original array
  const numbers2 = numbers.with(-2, 8);
  numbers2;
}

//?Array like: array is not an array but it is an array-like object. Array-like objects have length property.

const arrayLike = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};

console.log(arrayLike.length);

console.log(Array.isArray(arrayLike));

console.log(arrayLike instanceof Object);

const checkArgs = function () {
  console.log(arguments);

  //? ways of handling array-like
  // 1: using Array.from(): a static method
  // 2: using the spread operator
  const argArr = [...arguments];
  console.log(argArr);
  argArr.forEach((elem) => {
    console.log(elem);
  });
};

checkArgs(1, 2);

//? Array.fromAsync()

const collectionPromise = Array.fromAsync([1, 2, 3, 4, 5]);

console.log(collectionPromise);

collectionPromise.then((data) => console.log(data));

//? Array.of()

const a = new Array(2, 3, 4, 5);
const b = [6, 7, 8];

const c = Array.of(2, true, "hello", null, undefined, a, b, { name: "John" });
console.log(c);

const cPop = c.pop();
console.log(cPop);

//* Array iterable methods

//? Array filter method

let customers = [
  {
    id: 1,
    f_name: "Abby",
    l_name: "Thomas",
    gender: "M",
    married: true,
    age: 32,
    expense: 500,
    purchased: ["Shampoo", "Toys", "Book"],
  },
  {
    id: 2,
    f_name: "Jerry",
    l_name: "Tom",
    gender: "M",
    married: true,
    age: 64,
    expense: 100,
    purchased: ["Stick", "Blade"],
  },
  {
    id: 3,
    f_name: "Dianna",
    l_name: "Cherry",
    gender: "F",
    married: true,
    age: 22,
    expense: 1500,
    purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
  },
  {
    id: 4,
    f_name: "Dev",
    l_name: "Currian",
    gender: "M",
    married: true,
    age: 82,
    expense: 90,
    purchased: ["Book"],
  },
  {
    id: 5,
    f_name: "Maria",
    l_name: "Gomes",
    gender: "F",
    married: false,
    age: 7,
    expense: 300,
    purchased: ["Toys"],
  },
];

// filter() - Get 'Senior Citizens' by filtering not other customers

const seniorCustomers = customers.filter((customer) => {
  return customer.age >= 60;
});

console.log(seniorCustomers);

//? Map() method - Create a new array by doing something with each item in an array.

const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map((num) => num * num);
console.log(newNumbers);

const customerWithFullName = customers.map((customer) => {
  const title =
    customer.gender === "M"
      ? "Mr."
      : customer.gender === "F" && customer.married
      ? "Mrs."
      : "Miss.";
  return {
    ...customer,
    full_name: `${title} ${customer.f_name} ${customer.l_name}`,
  };
});

console.log(customerWithFullName);

//? the Reduce() method: The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value

const numbers2 = [1, 2, 3, 4, 5];
const sum = numbers2.reduce((acc, num) => acc + num, 0);
console.log(sum);

let count = 0;
const total = customers.reduce((accumulator, customer) => {
  if (customer.purchased.includes("Book")) {
    accumulator += customer.age;
    count++;
  }

  return accumulator;
}, 0);

console.log("Customer Avg age Purchaesed Book", Math.floor(total / count));
console.log("total: ", total);

//? reduceRight()

let number = [100, 40, 15];

const subsResult = number.reduceRight(
  (accumulator, current) => accumulator - current
);

console.log(subsResult);

//? some(): used to check whether at least an item meets the conditon in the test function and the returns true or false

const hasYoungCustomer = customers.some((customer) => {
  return customer.age < 10;
});

console.log("Has Young Customer(Age < 10)", hasYoungCustomer);

//?Every() - this to check whether all the items meet the condtio in the text function, and returns either true or false

const isCustomerMarried = customers.every((customer) => customer.married);

console.log("Has customer married", isCustomerMarried);

//? find() - find the youngest customer

const foundYoungCustomer = customers.find((customer) => customer.age < 10);

console.log("Found Young Customer (Age < 10):", foundYoungCustomer);

//?chaining array methods: Get the total amount spent by Married Customer

const totalAmountSpentByMarriedCustomers = customers
  .filter((customer) => customer.married)
  .reduce((accumulator, customer) => accumulator + customer.expense, 0);

console.log("Total amount", totalAmountSpentByMarriedCustomers);

const arr = [1, 2, 4, 5];

const arrItr = arr.entries();
console.log(arrItr.next().value);

for (const value of arrItr) {
  console.log(value);
}
