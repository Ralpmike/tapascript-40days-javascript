"use strict";

try {
  console.log(x);
} catch (error) {
  console.log(error instanceof Error);
  console.log(error.stack);
}

function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero(0) is not allowed");
    }
    const result = a / b;
    console.log(`Result: ${result}`);
  } catch (error) {
    console.error("Got a Math Error:", error.message);
  }
}

divideNumbers(10, 0);

const person = {
  name: "Raphael",
  address: {
    city: "New York",
    state: "NY",
  },
};

function getPersonInfo(user) {
  try {
    console.log(user.address.country.postalCode);
  } catch (error) {
    console.error("Can not access the property:", error.message);
  }
}

getPersonInfo(person);

function validateAge(age) {
  try {
    if (isNaN(age)) {
      const err = new Error("Invalid input: age must be a number");
      throw err;
    }
    console.log(`Your age is ${age}`);
  } catch (error) {
    console.error("Validation Error:", error.message);
  }
}

validateAge("twenty");

function validateForm(formData) {
  try {
    if (!formData.name) {
      throw new Error("Username is required");
    }
    if (!formData.email.includes("@")) {
      throw new Error("Invalid email format");
    }
  } catch (error) {
    console.error("Form Validation Error:", error.message);
    throw error; //* Rethrow the error to be handled by the caller
  }
}

try {
  validateForm({
    name: "Raphael",
    email: "example.com",
  });
} catch (error) {
  console.error("Showing error message for user creation: ", error.message);
}

//? Custom Error

function ValidationError(message) {
  this.name = "ValidationError";
  this.message = message || "Default Message";
  // this.stack = new Error().stack;
}

// ValidationError.prototype = Object.create(Error.prototype);

function validateCitizen(age) {
  if (age < 60) {
    throw new ValidationError("You not are a senior citizen");
  }
  return "You are a senior citizen";
}

try {
  console.log(validateCitizen(50));
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}
