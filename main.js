let counter1 = 0;
let counter2 = 0;
let current1 = 0;
let current2 = 0;

// let player1 = prompt('Enter name for player 1');
// let player2 = prompt('Enter name for player 2');
// document.getElementById('start1').innerHTML = player1;
// document.getElementById('start2').innerHTML = player2;

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
    <div id="hold" class="hold">
      <img class="plus" src="./images/hold.png" alt="" /> HOLD
    </div>`;

    counter1 = 0;
    counter2 = 0;
    current1 = 0;
    current2 = 0;
    document.getElementById('score1').innerHTML = '0';
    document.getElementById('score2').innerHTML = '0';
    document.getElementById('total1').innerHTML = '0';
    document.getElementById('total2').innerHTML = '0';
  });
};

const elhold = document.getElementById('bottom');
elhold.addEventListener('click', () => {
  if (player1) {
    current1 = current1 + counter1;
    document.getElementById('total1').innerHTML = current1;
    document.getElementById('score1').innerHTML = '0';
    counter1 = 0;
  } else {
    current2 = current2 + counter2;
    document.getElementById('total2').innerHTML = current2;
    document.getElementById('score2').innerHTML = '0';
    counter2 = 0;
  }
  hold();
});

let player1 = true;

if (player1) {
  document.getElementById('main1').style.backgroundColor = 'rgb(255, 251, 0)';
}

const hold = () => {
  if (player1) {
    player1 = false;
    console.log('false');
    document.getElementById('main2').style.backgroundColor = 'rgb(0, 121, 235)';
    document.getElementById('main1').style.backgroundColor = 'white';
  } else {
    player1 = true;
    console.log('true');
    document.getElementById('main2').style.backgroundColor = 'white';
    document.getElementById('main1').style.backgroundColor = 'rgb(255, 251, 0)';
  }
};

function roll() {
  if (player1 == true) {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    document
      .querySelector('.img')
      .setAttribute('src', './images/dice' + randomNumber1 + '.png');

    counter1 = counter1 + randomNumber1;
    document.getElementById('score1').innerHTML = counter1;

    if (counter1 > 20) {
      current1 = current1 + 1;
      document.getElementById('total1').innerHTML = current1;
      counter1 = 0;
    }
    if (counter1 < 20 && counter1 == 1) {
      document.getElementById('score1').innerHTML = '0';
      counter1 = 0;
    }
  } else {
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document
      .querySelector('.img')
      .setAttribute('src', './images/dice' + randomNumber2 + '.png');

    counter2 = counter2 + randomNumber2;
    document.getElementById('score2').innerHTML = counter2;

    if (counter2 > 20) {
      current1 = current2 + 1;
      document.getElementById('total2').innerHTML = current2;
      counter2 = 0;
    }
    if (counter2 < 20 && counter2 == 1) {
      document.getElementById('score2').innerHTML = '0';
      counter2 = 0;
    }
  }
}
