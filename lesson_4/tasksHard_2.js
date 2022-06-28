'use strict'

// let tax = 0; //налог
// let salary = 50000; //доход
let salaryLeft;


tax = 0;
switch (true) {
  case (salary > 50000):
    tax += 15000 * 13 / 100; //налог с 15000
    tax += 35000 * 20 / 100; //налог с 15000 до 50000
    salaryLeft = salary - 50000;
    tax += salaryLeft * 30 / 100; //налог с больше 50000
    break;
  case (salary > 15000):
    tax += 15000 * 13 / 100; //налог с 15000
    salaryLeft = salary - 15000;
    tax += salaryLeft * 20 / 100; //налог с больше 15000
    break;
  default:
    tax = salary * 13 / 100;
}


console.log(tax);