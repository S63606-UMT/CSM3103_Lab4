// 1. Write a JavaScript function to find sum of digits of a number
function sumOfDigits(n) {
  if (n === 0) {
    return 0;
  } else {
    return n % 10 + sumOfDigits(Math.floor(n / 10));
  }
}

// 2. Write a JavaScript program to compute x raise to the power y using recursion
function power(x, y) {
  if (y === 0) {
    return 1;
  } else {
    return x * power(x, y - 1);
  }
}
