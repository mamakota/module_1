'use strict'

const getRandomNumber = () => {
  const randomNumber = Math.round(Math.random() * 100);
  return randomNumber;
};

const getRandomArray = (qua) => {
  const randomArray = [];
  for (let i = 0; i < qua; i++) {
    randomArray.push(getRandomNumber());
  }

  return randomArray;
};

console.log(getRandomArray(10));