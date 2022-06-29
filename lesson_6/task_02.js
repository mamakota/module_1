'use strict'

const isPrime = (number) => {
  let counter = 0;
  for (let i = 1; i <= number; i++) {
    if (counter > 2) {
      break;
    }
    if (number % i === 0) {
      // console.log(i);
      counter++;
    }
  }
  if (counter === 2) {
    return true;
  } else {
    return false;
  }
}

console.log(isPrime(151));