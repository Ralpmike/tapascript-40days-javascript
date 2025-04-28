/**
 * ?## 2. Craete Multiplication Table (Using for loop)
Write a program to print the multiplication table of a given number up to 10.
For Example: If N = 3, output should be:

```bash
3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30
 */

for (let i = 1; i <= 10; i++) {
  console.log(`3 x ${i} = ${3 * i}`);
}

let sum = 0;

for (let index = 1; index < 500; index++) {
  if (index % 2 == 0) {
    console.log(index);
    continue;
  }

  sum += index;
}

sum;

for (let i = 1; i <= 20; i++) {
  if (i % 3 == 0) continue;

  console.log(i);
}

let input = "6789";
let i = 1;
let output = "";

while (i <= input.length) {
  // output += input[-i]
  output += input[input.length - i];
  Number(output);
  i++;
}

console.log(output);
