'use strict'

const getAverageValue = ([...arr]) => {
  let summ = 0;
  for (let elem of arr) {
    summ += elem;
  }
  let avarage = Math.floor(summ / arr.length);

  return avarage;
}

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

console.log(getAverageValue(allСashbox));