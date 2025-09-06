"use strict";

function makeGreeting(name) {
  return `Hello, my name is  ${name}!`;
}

const name = "Miriam";
// const greeting = `Hello, my name is  ${name}!`;
const greeting = makeGreeting(name);
console.log("greeting", greeting);

// const log = document.querySelector('.event-log');

// document.querySelector('#xhr').addEventListener('click', () => {
//   log.textContent = '';

//   const xhr = new XMLHttpRequest();

//   xhr.addEventListener('loadend', () => {
//     log.textContent = `${log.textContent}Finished with status: ${xhr.status}`
//   });

//   xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

//   xhr.send();

//   xhr.responseType = 'json';

//   xhr.addEventListener('load', () => {
//     log.textContent = `${log.textContent}Finished with status: ${xhr.response}`
//     console.log('xhr.response', xhr.response);
//     XMLHttpRequest.

//   });

//   log.textContent = `${log.textContent}Started XHR request\n`
// })

// document.querySelector('#reload').addEventListener('click', () => {
//   location.reload();
// })

const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

console.log("fetchPromise", fetchPromise);

// fetchPromise.then((response) => {
//   const jsonPromise = response.json();
//   jsonPromise.then((data) => console.log("data", data[0]));
// });

fetchPromise
  .then((res) => {
  if(!res.ok){
    throw new Error(`HTTP error! status: ${res.status}`);
  }  
   return res.json()
  })
  .then((data) => console.log("data", data[0]))
  .catch((error) => console.error(
    `Could not fetch the data: ${error.message}`
  ));


  //? Combining multiple promises

const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
); 

const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
);

const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);

//?Poorly constructed endpoints
// const fetchPromise1 = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );
// const fetchPromise2 = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
// );
// const fetchPromise3 = fetch(
//   "bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
// );


// Promise.all([fetchPromise1, fetchPromise2, fetchPromise3]).then(responses => {
//   for(const response of responses){
//     console.log(`${response.url}: ${response.status}`);
    
//   }
// }).catch(error => console.error(
//   `Could not fetch the data: ${error}`
// ));

async function fetchProducts(){

try {
  const response = await fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
  );

  if(!response.ok){
    console.log('response', response);
    
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  console.log("data", data[0]);
  return data
} catch (error) {
  console.error(
    `Could not fetch the data: ${error}`
  )  

  throw error
}


}

const promise =  fetchProducts();

promise.then(data => console.log('data', data)).catch(error => console.error('error', error.message));