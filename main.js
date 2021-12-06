let counter1 = 0;
let counter2 = 0;
let current1 = 0;
let current2 = 0;

const reload = () => {
  element = document.getElementById('new');

  element.addEventListener('click', () => {
    const roll = document.getElementById('top');
    roll.innerHTML = `<div onclick="roll()" id="roll" class="roll">
      <img class="plus" src="./images/roll.png" alt="" />
      ROLL DICE
    </div>`;

    const hold = document.getElementById('bottom');
    hold.innerHTML = ` 
    <div onclick="reload()" id="hold" class="hold">
      <img class="plus" src="./images/hold.png" alt="" /> HOLD
    </div>`;

    counter1 = 0;
    counter2 = 0;
    current1 = 0;
    current2 = 0;
    document.getElementById('score1').innerHTML = '0';
    document.getElementById('score2').innerHTML = '0';
    document.getElementById('wins1').innerHTML = '0';
    document.getElementById('wins2').innerHTML = '0';
  });
};

function roll() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  document
    .querySelector('.img')
    .setAttribute('src', './images/dice' + randomNumber + '.png');
  counter1 = counter1 + randomNumber;
  document.getElementById('score1').innerHTML = counter1;

  counter2 = counter2 + randomNumber;
  document.getElementById('score2').innerHTML = counter2;

  if (counter1 > 20) {
    current1 = current1 + 1;
    document.getElementById('wins1').innerHTML = current1;
    counter1 = 0;
  }
  if (counter1 < 20 && counter1 == 1) {
    document.getElementById('score1').innerHTML = '0';
    counter1 = 0;
  }

  if (counter2 > 20) {
    current2 = current2 + 1;
    document.getElementById('wins2').innerHTML = current2;
    counter2 = 0;
  } else if (counter2 < 20 && counter2 == 1) {
    document.getElementById('score2').innerHTML = '0';
    counter2 = 0;
  }
}

// function rollPlayer2() {
//   var randomNumber = Math.floor(Math.random() * 6) + 1;
//   document
//     .querySelector('.img')
//     .setAttribute('src', './images/dice' + randomNumber + '.png');
//     counter2 = counter2 + randomNumber;
//   document.getElementById('score2').innerHTML = counter2;
//   if (counter2 > 20) {
//     document.getElementById('status2').innerHTML = 'Winner!';
//     document.getElementById('start2').innerHTML =
//       "<button onclick='reload()'>Start again</button>";
//     document.getElementById('roll2').innerHTML = '';
//     counter2 = 0;
//   } else if (counter2 < 20 && counter2 == 1) {
//     document.getElementById('score2').innerHTML = '0';
//     document.getElementById('status2').innerHTML = 'You lost!';
//     document.getElementById('start2').innerHTML =
//       "<button onclick='reload()'>Start again</button>";
//     document.getElementById('roll2').innerHTML = '';
//     counter2 = 0;
//   }
// }
