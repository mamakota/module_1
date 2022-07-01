'use strict'

const getRandomNumber = (a, b) => {
  let min;
  let max;
  if (a < b) {
    min = a;
    max = b;
  } else {
    min = b;
    max = a;
  }

  const randomNumber = Math.round(min + Math.random() * (max - min));
  return randomNumber;
};


const getRandomArray = (qua, n, m, optional = 1) => {
  const randomArray = [];

  while (randomArray.length < qua) {
    let randomNumber = getRandomNumber(n, m);

    switch (optional) {
      case 'even':
        if (randomNumber % 2 == 0) {
          randomArray.push(randomNumber)
        } else {
          continue
        }
        break;

      case 'odd':
        if (+randomNumber % 2 == 1) {
          randomArray.push(randomNumber)
        } else {
          continue
        }
        break;

      default:
        randomArray.push(randomNumber);
    }

  }

  return randomArray;
};

console.log(getRandomArray(10, -10, 10, 'even'));