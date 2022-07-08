'use strict';

(() => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = () => {
    const bag = {
      player: 15,
      computer: 15,
    };

    return function start() {
      const randomNumber = getRandomIntInclusive(0, 1);
      const promptPlayer = prompt(`Введите число от 1 до ${bag.player}`, '');

      if (randomNumber === 0) {
        console.log('бот загадал четное');
      } else {
        console.log('бот загадал нечетное');
      }

      if (!(promptPlayer === null) && !(promptPlayer === '') && bag.player > 0 && bag.computer > 0 && !isNaN(promptPlayer)) {

        if (promptPlayer % 2 === randomNumber) {
          bag.player -= +promptPlayer;
          bag.computer += +promptPlayer;
          alert('bot won');
          alert(`Score:\nBot:${bag.computer}\nPlayer:${bag.player}`);
        } else {
          bag.player += +promptPlayer;
          bag.computer -= +promptPlayer;
          alert('you won');
          alert(`Score:\nBot:${bag.computer}\nPlayer:${bag.player}`);
        }

      }

      if (promptPlayer === null || bag.player <= 0 || bag.computer <= 0) {
        alert(`Score:\nBot:${bag.computer}\nPlayer:${bag.player}`);
      } else {
        return start();
      }
    };
  };

  window.marble = game;
})();