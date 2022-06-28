'use strict'


let tax = 0; //налог
let salary = 45000; //доход

// if (salary >= 50000) {
//   tax = salary * 30 / 100;
// } else if (salary >= 15000) {
//   tax = salary * 20 / 100;
// } else {
//   tax = salary * 13 / 100;
// }
// console.log(tax);

switch (true) {
  case (salary > 50000):
    tax = salary * 30 / 100;
    break;
  case (salary > 15000):
    tax = salary * 20 / 100;
    break;
  default:
    tax = salary * 13 / 100;
}

console.log(tax);