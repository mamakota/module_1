'use strict'

const modifyString = (string) => {
  let stringTemp = string.toLowerCase();
  return stringTemp[0].toUpperCase() + stringTemp.slice(1);
};

console.log(modifyString('QWesdqweWEQ'));