let humanScore = 0;
let computerScore = 0;
let finishScore = 2;

const buttons = document.querySelectorAll('.player-move');
for (let button of buttons) {
  const attribute = button.getAttribute('data-move');
  button.addEventListener('click', () => {
    playerMove(attribute)
  });
}

function playerMove(move) {
  play(move);
  checkResult();
}

function play(humanPlay) {

  computerPlay = getComputerPlay();

  document.getElementById('status').innerHTML = "<p>You played <strong>" + humanPlay + "</strong>. The computer played <strong>" + computerPlay + "</strong>.</p>";

  if(humanPlay == 'rock') {
    if(computerPlay == 'rock') {
      document.getElementById('status').innerHTML += "<p>You tied. :|</p>";
    } else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML += "<p>You lose. :(</p>";
      computerScore++;
    } else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>You win! :)</p>";
      humanScore++;
    }
  } else if (humanPlay == 'paper') {
    if(computerPlay == 'rock') {
      document.getElementById('status').innerHTML += "<p>You won! :)</p>";
      humanScore++;
    } else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML += "<p>You draw. :|</p>";
    } else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>You lost. :(</p>";
      computerScore++;
    }
  } else if (humanPlay == 'scissors') {
    if(computerPlay == 'rock') {
      document.getElementById('status').innerHTML += "<p>You lose. :(</p>";
      computerScore++;
    } else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML += "<p>You win! :)</p>";
      humanScore++;
    } else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>You tied. :|</p>";
    }
  }

  document.getElementById('humanScore').innerHTML = humanScore;
  document.getElementById('computerScore').innerHTML = computerScore;

}

function getComputerPlay() {
  var plays = ['rock', 'paper', 'scissors'];
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}

function checkResult() {
  if (humanScore === finishScore) {
    console.log('User won the game')
    document.getElementById('result').innerHTML = 'User won the game';
    disableGame();
  }
  if (computerScore === finishScore) {
    console.log('Computer won the game')
    document.getElementById('result').innerHTML = 'Computer won the game';
    disableGame();
  }
}

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function() {
  humanScore = 0;
  computerScore = 0;
  document.getElementById('result').innerHTML = 'Choose';
  document.getElementById('humanScore').innerHTML = "0";
  document.getElementById('computerScore').innerHTML = "0";
  document.getElementById('rock').removeAttribute("disabled");
  document.getElementById('scissors').removeAttribute("disabled");
  document.getElementById('paper').removeAttribute("disabled");
});

function disableGame() {
  document.getElementById('rock').setAttribute("disabled", true);
  document.getElementById('scissors').setAttribute("disabled", true);
  document.getElementById('paper').setAttribute("disabled", true);
}