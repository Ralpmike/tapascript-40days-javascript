console.log("Start");

setTimeout(() => {
  console.log("Done");
}, 1000);

console.log("Waiting...");

function greet(name, callback) {
  console.log(`Hi ${name}`);
  callback();
}

function sayBye() {
  console.log("Bye");
}

greet("Raphael", sayBye);

// function orderPizza(type, name){
//   query(`api/pizzahub/`, function(result, error){
//     if(!error){
//       let shopId = result[0];
//       console.log(shopId);

//     }
//   })
// }

// orderPizza('veg', 'Margherita');
