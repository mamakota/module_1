'use strict'

const filter = ([...arr1], [...arr2]) => {
  let passedStudents = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      passedStudents.push(arr1[i]);
    }
  }
  return passedStudents;
}



const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

console.log(filter(allStudents, failedStudents));