'use strict'

const getLeapYears = (n, m) => {
  let min;
  let max;
  let arr = []
  if (n < m) {
    min = n;
    max = m;
  } else {
    min = m;
    max = n;
  }

  for (let i = min; i <= max; i++) {
    if (!(i % 4)) {
      arr.push(i);
    }
  }

  return arr;
};


console.log(getLeapYears(-20, 10));