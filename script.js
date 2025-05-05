let playerScore = 0;
let computerScore = 0;

let containerButton = document.querySelector('#containerButton');
let rockBtn =  document.querySelector('#rockBtn');
let paperBtn = document.querySelector('#paperBtn');
let scissorBtn = document.querySelector('#scissorBtn');
let results = document.querySelector('#results');
let end = document.querySelector('#end');

let humanResult = document.querySelector('#humanResult');
let computerResult = document.querySelector('#computerResult');
let output = document.querySelector('#output');

humanResult.textContent = `Player Score: ${playerScore}`;
computerResult.textContent = `Computer Score: ${computerScore}`;

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
}

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

containerButton.addEventListener('click', (e) => {    //get human choice and call the computer choice function too
    let target = e.target;
    switch(target.id) {
        case 'rockBtn':
            playRound('rock', getComputerChoice());
            break;
        case 'paperBtn':
            playRound('paper', getComputerChoice());
            break;
        case 'scissorBtn':
            playRound('scissors', getComputerChoice());
            break;
    }
});

function playRound(humanChoice, computerChoice) {
        if ((humanChoice == 'rock' && computerChoice == 'scissors') ||
            (humanChoice == 'scissors' && computerChoice == 'paper') ||
            (humanChoice == 'paper' && computerChoice == 'rock')) {
            output.textContent = `you do ${humanChoice} and computer did ${computerChoice} you win!`;
            ++playerScore;
        } else if ((computerChoice == 'rock' && humanChoice == 'scissors') ||
            (computerChoice == 'scissors' && humanChoice == 'paper') ||
            (computerChoice == 'paper' && humanChoice == 'rock')) {
            output.textContent = `you do ${humanChoice} and computer did ${computerChoice} computer win!`;
            ++computerScore;
        } else {
            output.textContent = `you do ${humanChoice} and computer did ${computerChoice} its a tie!`;
        };
        if (playerScore === 3 || computerScore === 3) {
            disableButtons();
            end.textContent = `Game over !`;
        }
humanResult.textContent = `Player Score: ${playerScore}`;
computerResult.textContent = `Computer Score: ${computerScore}`;
}
        