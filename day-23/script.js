//? - What is a promise?
//? - Promise is a JavaScript object for asynchronous operation.
//? - Promise is a proxy for a value not necessarily known when the promise is created.
//? - It allows you to write code that executes after some asynchronous task has completed
//? - It can be used to handle the success and failure of an asynchronous operation.

const promise = new Promise(function (resolve, reject) {
 
  setTimeout(() => {
     resolve("Success: Promise has been resolved");
     console.log("Promise", promise);
  }, 4000)
  reject("Error: Promise has been rejected");
});

console.log("Promise", promise);

//* Excutor function
// function(resolve, reject){
//     resolve("Success");
// reject("Error");
// }

//? state - 
//* pending : initial state
//* fulfilled : resolved
//* rejected : error

//? result - 
  //*undefined : initial state when value is pending
//* fulfilled : value
//* rejected : error

//? Handling Promises
//? 1. .then() - to handle the fulfilled state

promise.then(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.error(error);
  }
)


//? 2. .catch() - to handle the rejected state
//? 3. . finally() - to handle both fulfilled and rejected state