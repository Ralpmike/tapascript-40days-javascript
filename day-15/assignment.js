"use strict";

//? 001
const newArray = new Array(1, 2, 3, 4, 5);
console.log(newArray);

//?002

const emptySlots = new Array(3);
console.log(emptySlots);

//?003
const arrayElements = [1, 2, 3, 4, 5, 7];
console.log(arrayElements.length - 2);

//?004
for (let i = 0; i < arrayElements.length; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}

//?006
{
  const arrayElements = [1, 2, 3, 4, 5, 7];
  console.log(arrayElements.pop());
  console.log(arrayElements.shift());
}

//? 007

const favouritFoods = [
  "🍈",
  "🍕",
  "🍅",
  "🍌",
  "🍇",
  "🥝",
  "🍓",
  "🍒",
  "🍍",
  "🍊",
];
const [, , , , , myFavourite, , , ,] = favouritFoods;
console.log(myFavourite);

//?008
const [, , ...restFoods] = favouritFoods;
console.log(restFoods);

//?009
const shallowClone = [...favouritFoods];
console.log(shallowClone.shift());
console.log(favouritFoods);
console.log(shallowClone);

//?010
const emptyArray = [1, 2, 3, 4, 5];
console.log((emptyArray.length = 0));

console.log(emptyArray);

//?011

const arrayResize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arrayResize.length; i++) {
  if (arrayResize[i] === 5) {
    arrayResize.length = 6;
    break;
  }
}
console.log(arrayResize);
console.log(arrayResize.length);

{
  //?012
  const arraySpliceToEmpty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.log(arraySpliceToEmpty.splice(0, 0));
}

{
  //?014
  const array1 = [];
  const array2 = [];
  console.log(array1.concat(array2));
}

//?015
{
  const fruits = ["banana", "apple", "orange", "Watermelon"];
  const search = "App";

  console.log(
    fruits.some((fruit) => fruit.toLowerCase().includes(search.toLowerCase()))
  );
}

{
  const alphaNumeric = ["abc123", "def456", "ghi789", "jkl1011"];
  console.log(alphaNumeric.toSorted((a, b) => b - a));
  console.log(alphaNumeric);
}

{
  //?020
  const fruits = ["banana", "apple", "orange", "Watermelon"];

  console.log(fruits.toString());
  console.log(fruits.join(", "));
}
