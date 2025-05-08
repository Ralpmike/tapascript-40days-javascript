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

//? to get freeze an object, you can use Object.freeze() method. this method prevents the object from being modified, i.e, you can't add or remove properties from the object, and you can't change the values of the properties in the object.

const myUserData3 = Object.freeze(userData);
myUserData3.name = "Raphael";

console.log(myUserData3.name); // it won't change the name to Raphael because the object is frozen
console.log(myUserData3.age); // it will still return 45 because the object is frozen

//* to check whether an object is frozen or not, you can use Object.isFrozen() method
const isFrozen = Object.isFrozen(myUserData3);
console.log(isFrozen);

//? object.seal() method prevents the object from being deleted, but allows the properties to be modified. it also prevents new properties from being added to the object.

const sealData = {
  name: "Thomas Lumumba",
  age: 45,
};
const myUserData4 = Object.seal(sealData);
myUserData4.name = "Raphael";
console.log(myUserData4.name);

//* to check whether an object is sealed or not, you can use Object.isSealed() method
const isSealed = Object.isSealed(myUserData4);
console.log(isSealed); // it will return true because the object is sealed

//? Object.hasOwn() method checks whether the object has the property or not. it returns true if the object has the property, otherwise it returns false.
const hasName = Object.hasOwn(sealData, "name");
hasName; // it will return true because the object has the property name

//* Object destructuring: this is a way of extracting values from an object and assigning them to variables. it is a shorthand way of writing the same thing as above.

const studentDetails = () => {
  return {
    myName: "John Doe",
    age: 20,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
    },
    hobbies: ["reading", "swimming", "coding"],
    isStudent: true,
    // greet: function () {
    //   return `Hello, my name is ${this.myName} and I am ${this.age} years old. Nice to meet you!`;
    // },
  };
};

const { myName, age, address, hobbies, isStudent } = studentDetails();

console.log(myName); // John Doe

const personObject = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107",
    },
  },
};

const {
  name: persoName,
  company: {
    name: companyName,
    location: { city, zip },
  },
} = personObject;

console.log(persoName, companyName, city, zip);
