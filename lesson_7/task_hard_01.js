'use strict'

const getAveragePriceGoods = ([...arr]) => {
  let quantity = 0;
  let sum = 0;
  for (let elem of arr) {
    quantity += elem[0];
    sum += elem[1];
    console.log(quantity, sum);
  }

  return Math.floor(sum / quantity);
};



const allСashbox = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370]
];

console.log(getAveragePriceGoods(allСashbox));