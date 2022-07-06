'use strict'

const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);
const game = () => {
  let yourTake = prompt('enter number 1-100', '');
  switch (true) {
    case (yourTake === ''):
      game();
      break;
    case (yourTake === null):
      break;
    case (yourTake < randomNumber):
      alert('Больше');
      game();
      break;
    case (yourTake > randomNumber):
      alert('Меньше');
      game();
      break;
    case (+yourTake === randomNumber):
      alert('Правильно!');
      break;
  }
}

// console.log(null === null);

game();