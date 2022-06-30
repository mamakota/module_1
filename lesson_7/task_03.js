'use strict'

const addPrefix = ([...arr], prefix) => {
  let arrTemp = [];
  for (let elem of arr) {
    arrTemp.push(`${prefix} ${elem}`);
  }

  return arrTemp;
}

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

console.log(addPrefix(names, 'Mr'));