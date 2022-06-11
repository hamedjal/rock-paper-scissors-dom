let playerCount = 0;
let computerCount = 0;
const choices = ["ROCK", "PAPER", "SCISSORS"];
const win = { ROCK: "SCISSORS", PAPER: "ROCK", SCISSORS: "PAPER" };
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const result = document.querySelector(".result");
const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");

const getRandomItem = () => choices[Math.floor(Math.random() * choices.length)];
const start = () => {
  btnRock.addEventListener('click', play);
  btnPaper.addEventListener('click', play);
  btnScissors.addEventListener('click', play)
}

const play = () => {
  if (playerCount >= 5 || computerCount >= 5) {
    btnRock.removeEventListener('click', play);
    btnPaper.removeEventListener('click', play);
    btnScissors.removeEventListener('click', play)
    let winner = playerCount > computerCount ? 'You WON!' : playerCount < computerCount ? 'Computer WON!' : 'You have a Draw!';
    alert(`${winner}`);
    result.textContent = '';
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    return;
  }
  let randomChoice = getRandomItem();
  let playerChoice = event.target.innerText;
  console.log(playerChoice, randomChoice);
  if (randomChoice === win[playerChoice]) {
    playerCount++;
    playerScore.textContent = playerCount;
    result.textContent = `You Won! ${playerChoice} Beats ${randomChoice}!`;
  } else if (win[randomChoice] === playerChoice) {
    computerCount++;
    computerScore.textContent = computerCount;
    result.textContent = `You Lost! ${randomChoice} Beats ${playerChoice}!`;
  } else {
    result.textContent = `You have a Draw! ${randomChoice} = ${playerChoice}`;
  }
}

start();