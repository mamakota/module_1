'use strict'

const calculate = (sum, quantity, promocode) => {
  let sumTemp = sum;

  if (quantity > 10) {
    sumTemp -= sum * 0.03;
  }

  if (sumTemp > 30000) {
    let discountCost = sumTemp - 30000;
    discountCost -= discountCost * 0.15;
    // console.log(discountCost);
    sumTemp = 30000 + discountCost;
  }

  if (promocode.toUpperCase() === "METHED") {
    sumTemp -= sumTemp * .1;
  }

  if (promocode.toUpperCase() === "G3H2Z1" && sumTemp > 2000) {
    sumTemp -= 500;
  }

  return sumTemp;
};

console.log(calculate(40000, 11, 'G3H2Z1'));