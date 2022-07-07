'use strict';
(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

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

    // const lang = language === 'EN' || language === 'ENG' ? FIGURES_ENG : FIGURES_RUS;

    return function start() {
      let randomNumber = getRandomIntInclusive(0, 2);
      let promptPlayer = prompt('камень,ножницы,бумага?', '');

      if (!(promptPlayer === null)) {
        let computerChoice = FIGURES_RUS[randomNumber][0].toLocaleUpperCase();
        let playerChoice = promptPlayer[0].toLocaleUpperCase();

        if (playerChoice === computerChoice) {
          alert('Ничья');
          console.log(`ничья`);
        } else {
          switch (true) {
            case playerChoice === 'К':
              if (computerChoice === 'Н') {
                console.log('камень бьет ножницы');
                alert('Вы: камень\nКомпьютер: ножницы\nВы выиграли');
                result.player++
              } else {
                console.log('бумага бьет камень');
                alert('Вы: камень\nКомпьютер: бумага\nВы проиграли');
                result.computer++
              }
              break;
            case playerChoice === 'Н':
              if (computerChoice === "Б") {
                console.log('ножницы бьют бумагу');
                alert('Вы: ножницы\nКомпьютер: бумага\nВы выиграли');
                result.player++
              } else {
                console.log('камень бьет ножницы');
                alert('Вы: ножницы\nКомпьютер: камень\nВы проиграли');
                result.computer++
              }
              break;
            case playerChoice === 'Б':
              if (computerChoice === 'К') {
                console.log('бумага бьет камень');
                alert('Вы: бумага\nКомпьютер: камень\nВы выиграли');
                result.player++
              } else {
                console.log('ножницы бьют бумагу');
                alert('Вы: бумага\nКомпьютер: ножницы\nВы проиграли');
                result.computer++
              }
          }
        }
      }

      if (promptPlayer === null) {
        if (confirm('Уверены что хотите выйти?')) {
          alert(`Результат:\nКомпьютер: ${result.computer}\nВы: ${result.player}`);
          console.log(result);
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