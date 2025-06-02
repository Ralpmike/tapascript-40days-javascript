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

  const numbers2 = numbers.with(-2, 8);
  numbers2;
}
