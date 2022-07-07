'use strict';

const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

const game = () => {
  const yourTake = +prompt('enter number 1-100', '');
  let win = false;

  switch (true) {
    case (yourTake === null || yourTake === ''):
      break;
    case (yourTake < randomNumber):
      alert('Больше');
      break;
    case (yourTake > randomNumber):
      alert('Меньше');
      break;
    case (+yourTake === randomNumber):
      alert('Правильно!');
      win = true;
      break;
  }

  if (win) {
    return yourTake;
  } else {
    return game();
  }
};

// console.log(null === null);

game();
