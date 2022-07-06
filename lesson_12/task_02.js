'use strict';

const getRandomArray = (arr) => {
  let arrTemp = [...arr];
  const randomNumber = Math.floor(Math.random() * 11);

  arrTemp.push(randomNumber);

  let arrSum = 0;

  arrTemp.forEach((item) => {
    arrSum += item;
  });

  if (arrSum < 50) {
    return getRandomArray(arrTemp);
  }
  return arrTemp;
};

console.log(getRandomArray([]));