'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper', 'Draw', 'You', 'Computer',
    'You won', 'You lost', 'Are you sure you want to quit?', 'Final score',
  ];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага', 'Ничья', 'Вы',
    'Компьютер', 'Вы выиграли', 'Вы проиграли', 'Уверены что хотите выйти?',
    'Результат',
  ];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };

    const lang = language === 'EN' || language === 'ENG' ? FIGURES_ENG :
      FIGURES_RUS;

    return function start() {
      const randomNumber = getRandomIntInclusive(0, 2);
      const promptPlayer = prompt(`${lang[0]}, ${lang[1]}, ${lang[2]}?`, '');

      if (!(promptPlayer === null) && !(promptPlayer === '')) {
        const computerChoice = lang[randomNumber][0].toLowerCase();
        const playerChoice = promptPlayer[0].toLowerCase();

        if (playerChoice === computerChoice) {
          alert(`${lang[3]}`);
        } else {
          switch (true) {
            case playerChoice === lang[0][0]: // камень
              if (computerChoice === lang[1][0]) {
                alert(`${lang[4]}: ${lang[0]}\n${lang[5]}: ${lang[1]}
                \n${lang[6]}`);
                result.player++;
              } else {
                alert(`${lang[4]}: ${lang[0]}\n${lang[5]}: ${lang[2]}
                \n${lang[7]}`);
                result.computer++;
              }
              break;
            case playerChoice === lang[1][0]: // ножницы
              if (computerChoice === lang[2][0]) {
                alert(`${lang[4]}: ${lang[1]}\n${lang[5]}: ${lang[2]}
                \n${lang[6]}`);
                result.player++;
              } else {
                alert(`${lang[4]}: ${lang[1]}\n${lang[5]}: ${lang[0]}
                \n${lang[7]}`);
                result.computer++;
              }
              break;
            case playerChoice === lang[2][0]: // бумага
              if (computerChoice === lang[0][0]) {
                alert(`${lang[4]}: ${lang[2]}\n${lang[5]}: ${lang[0]}
                \n${lang[6]}`);
                result.player++;
              } else {
                alert(`${lang[4]}: ${lang[2]}\n${lang[5]}: ${lang[1]}
                \n${lang[7]}`);
                result.computer++;
              }
          }
        }
      }

      if (promptPlayer === null) {
        if (confirm(`${lang[8]}`)) {
          alert(`${lang[9]}:\n${lang[5]}: ${result.computer}\n${lang[4]}: 
          ${result.player}`);
        } else {
          return start();
        }
      } else {
        return start();
      }
    };
  };

  window.RPS = game;
})();
