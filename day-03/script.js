console.log("Day 3");

console.log(undefined === undefined);

console.log(5 > 4 && 4 === 10);

let a1 = null ?? 1;
let a2 = undefined ?? 1;

console.log(a1);

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
