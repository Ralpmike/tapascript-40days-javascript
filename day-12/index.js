let user = {
  name: "raphael",
  age: 25,
  "is admin": true,
};

console.log(user.name.toUpperCase());

user.isSeniorCitizen = true;

user;

console.log(user["is admin"]);

user["movie lover"] = true;

console.log(user);

// delete user["movie lover"];

// console.l  og(user);

// ? to retrieve data from an object dynamically

const someKey = "age";

console.log(user[someKey]);

//? to create a key in an object dynamically

// const car = "BMW";

// let favCars = {
//   [car]: 5,
// };

// favCars;

//? Constructor function

//* this a blue print to create a car and model instance
function Car(name, model) {
  this.name = name;
  this.model = model;
}

//? to create an objecct from the contructor function, you'd have to use the keyword 'new' before the contructor function

const bmwCar = new Car("BMW", 2022);

const audiCar = new Car("Audi", 2014);

bmwCar;

audiCar;

console.log(bmwCar instanceof Car);

//* creating an object using javaScript Object() method

const person = new Object();

person.name = "Jude";
person.age = 34;

person;

let name = "John";

//* Another way of creating an object is using factory function

function createUser(name, age) {
  return {
    name,
    age,
    greetUser: () => {
      return `Good morning ${this.name}`;
    },
  };
}

const user1 = createUser("Raphael", 27);
console.log(user1);
console.log(user1.age);
console.log(user1.greetUser());

//! Oject static methods

const obj1 = { p: 1, q: 2 };

const obj2 = { x: 3, y: 2 };

const returnedObj = Object.assign(obj1, obj2);

returnedObj;

//? the assign object method does not copy nested objects, rather, it only references it

const obj3 = {
  a: 1,
  b: {
    x: 2,
    y: 3,
  },
};

const obj4 = Object.assign({}, obj3);

obj4;

obj4.b.x = 3;

console.log(obj4.b.x);
console.log(obj3.b.x);
obj4.a = 4;
console.log(obj4.a);
console.log(obj3.a);

//? Structured cloning for deep cloning instead of using Object.assign() method

const obj5 = structuredClone(obj3);

obj5.b.x = 100;

console.log(obj3.b.x);
console.log(obj5.b.x);

//! Object.entries() method translates object to an array

const userData = {
  name: "Thomas Lumumba",
  age: 45,
};

const myUserData = Object.entries(userData);

myUserData;

//? to convert an array to an object, you can use Object.fromEntries() method
const myUserData2 = Object.fromEntries(myUserData);
console.log(myUserData2);

//? to get freeze an object, you can use Object.freeze() method
const myUserData3 = Object.freeze(userData);
myUserData3.name = "Raphael";

console.log(myUserData3.name); // it won't change the name to Raphael because the object is frozen
console.log(myUserData3.age); // it will still return 45 because the object is frozen
