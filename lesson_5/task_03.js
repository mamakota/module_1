'use strict'

const reverseString = (string) => {
  let tempString = string.split('');
  tempString = tempString.reverse();
  tempString = tempString.join('');
  return tempString;
};

console.log(reverseString('qweqweWEQ'));