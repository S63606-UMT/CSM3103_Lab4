// 1. Write a function to find the square of a given number 
function square(x) {
  return x * x;
}


// 2. Write a function to find sum of cubes of two numbers 
function sumOfCubes(a, b) {
  return a * a * a + b * b * b;
}


// 3. Write a function to reverse a number
function reverseNumber(n) {
  return parseInt(n.toString().split("").reverse().join(""));
}

// 4. Write a function to print all numbers between 1 and 100 which is divisible by given number z

function printDivisibleNumbers(z) {
  for (let i = 1; i <= 100; i++) {
    if (i % z === 0) {
      console.log(i);
    }
  }
}
