const choices = ['kő', 'papír', 'olló'];
let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = '';

  if (playerChoice === computerChoice) {
    result = `Döntetlen! Mindketten ${playerChoice}-t választottatok.`;
  } else if (
    (playerChoice === 'kő' && computerChoice === 'olló') ||
    (playerChoice === 'papír' && computerChoice === 'kő') ||
    (playerChoice === 'olló' && computerChoice === 'papír')
  ) {
    result = `Nyertél! ${playerChoice} legyőzi a(z) ${computerChoice}-t.`;
    playerScore++;
  } else {
    result = `Vesztettél! ${computerChoice} legyőzi a(z) ${playerChoice}-t.`;
    computerScore++;
  }

  document.getElementById('result').textContent = result;
  document.getElementById('score').textContent = `Te: ${playerScore} | Gép: ${computerScore}`;
}
