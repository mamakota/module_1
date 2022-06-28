'use strict'

const rain = Math.round(Math.random());

if (rain) {
  console.log('Пошёл дождь. Возьмите зонт!');
} else {
  console.log('Дождя нет!');
}


const maths = +prompt('Введите кол-во баллов по математике', '');
const rus = +prompt('Введите кол-во баллов по русскому языку', '');
const inform = +prompt('Введите кол-во баллов по информатике', '');

if ((maths + rus + inform) >= 265) {
  console.log('Поздравляю, вы поступили на бюджет!');
} else {
  console.log('net');
}


const requestedСash = prompt('Введите сумму', '');

if (requestedСash % 100 && requestedСash != 0) {
  console.log('введите сумму кратную 100');
} else {
  console.log('удачно');
}