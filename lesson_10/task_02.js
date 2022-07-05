'use strict'

const uniqueIp = new Set([...listIPv4]);
console.log(listIPv4.length);
console.log(uniqueIp);

const getNumberOfUniqueIp = (arr) => {
  const uniqueIp = new Set([...arr]);
  return uniqueIp.size;
}

console.log(getNumberOfUniqueIp(listIPv4));