let playerScore = 0;
let computerScore = 0;

let containerButton = document.querySelector('#containerButton');
let rockBtn =  document.querySelector('#rockBtn');
let paperBtn = document.querySelector('#paperBtn');
let scissorBtn = document.querySelector('#scissorBtn');
let results = document.querySelector('#results');
let end = document.querySelector('#end');


let output = document.querySelector('#output');



let humanResult = document.querySelector('#humanResult');

let computerResult = document.querySelector('#computerResult');

humanResult.textContent = `Player Score: ${playerScore}`;
computerResult.textContent = `Computer Score: ${computerScore}`;



function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
}


function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)]
}

// function getComputerChoice(min, max) {    //get computer choice
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

containerButton.addEventListener('click', (e) => {    //get human choice and call the computer choice function too
    let target = e.target;
    

    switch(target.id) {
        case 'rockBtn':
            playRound('rock', getComputerChoice())
            break;
        case 'paperBtn':
            playRound('paper', getComputerChoice())
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
            
            output.textContent = `you do ${humanChoice} and computer did ${computerChoice} you win!`
            ++playerScore;

        } else if ((computerChoice == 'rock' && humanChoice == 'scissors') ||
        (computerChoice == 'scissors' && humanChoice == 'paper') ||
        (computerChoice == 'paper' && humanChoice == 'rock')) {
            output.textContent = `you do ${humanChoice} and computer did ${computerChoice} computer win!`
            ++computerScore;

        } else {
            output.textContent = `you do ${humanChoice} and computer did ${computerChoice} its a tie!`
        };
        if (playerScore === 3 || computerScore === 3) {
            disableButtons();
            end.textContent = `Game over !`;
        }
humanResult.textContent = `Player Score: ${playerScore}`;
computerResult.textContent = `Computer Score: ${computerScore}`;
}
        


// function playRound(humanChoice, computerChoice) {
//     humanResult.textContent = `Player Score: ${playerScore}`;
//     computerResult.textContent = `Computer Score: ${computerScore}`;
//     if (humanChoice == computerChoice) {
//         output.textContent = 'Its a tie!';
        
//     }
//     else if (humanChoice == 1 && computerChoice == 2) {
//         output.textContent = 'rock vs paper, computer win!';
//         computerScore++;
        
//     }
//     else if (humanChoice == 1 && computerChoice == 3) {
//         output.textContent = 'rock vs scissors, player win!';
//         playerScore++;

//     }
//     else if (humanChoice == 2 && computerChoice == 1) {
//         output.textContent = 'paper vs rock, player win!';
//         playerScore++;
//     }
//     else if (humanChoice == 2 && computerChoice == 3) {
//         output.textContent = 'paper vs scissors, computer win!';
//         computerScore++;
//     }
//     else if (humanChoice == 3 && computerChoice == 1) {
//         output.textContent = 'scissors vs rock, computer win!';
//         computerScore++;
//     }
//     else if (humanChoice == 3 && computerChoice == 2) {
//         output.textContent = 'scissors vs paper, player win!';
//         playerScore++;
//     }
//     else;
//     if (computerScore == 4 || playerScore == 4) {
//         disableButtons();
//     }
    
//     }
    




    // if (computerScore === 4) {
    //     disableButtons()
    //     alert('computer win ! refresh to play again');
    // }
    // if (playerScore === 4) {
    //     disableButtons()
    //     alert('player win ! refresh to play again');













//  function getHumanChoice() {
//     let lowerCaseChoice = prompt("rock, paper or scissors");
//     let humanChoice = lowerCaseChoice.toLowerCase();
//     if (humanChoice == "rock") {
//         return 1;
//     }
//     else if (humanChoice == "paper") {
//         return 2;
//     }
//     else if (humanChoice == "scissors") {
//         return 3;
//     }
//     else {
//         console.log("Wrong input"); 
//         humanChoice = lowerCaseChoice.toLowerCase();
//     }
//  }








 
//     function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;

//     while ((humanScore < 3) && (computerScore < 3)) {
//         const humanChoice = getHumanChoice();  
//         const computerChoice = getComputerChoice(1, 3);
//         playRound(humanChoice, computerChoice)
//     }
//         function playRound(humanChoice, computerChoice) {
                
//             if (humanChoice == computerChoice) {
//                 console.log("its a tie !")
//                 console.log(humanScore, computerScore);
//             }
//             else if (humanChoice == 1 && computerChoice == 2) {
//                 console.log("rock vs paper, computer win!")
//                 computerScore++
//                 console.log(humanScore, computerScore);
//             }
//             else if (humanChoice == 1 && computerChoice == 3) {
//                 console.log("rock vs scissors, player win!")
//                 humanScore++
//                 console.log(humanScore, computerScore);
//             }
//             else if (humanChoice == 2 && computerChoice == 1) {
//                 console.log("paper vs rock, player win!")
//                 humanScore++
//                 console.log(humanScore, computerScore);
//             }
//             else if (humanChoice == 2 && computerChoice == 3) {
//                 console.log("paper vs scissors, computer win!")
//                 computerScore++
//                 console.log(humanScore, computerScore);
//             }
//             else if (humanChoice == 3 && computerChoice == 1) {
//                 console.log("scissors vs rock, computer win!")
//                 computerScore++
//                 console.log(humanScore, computerScore);
//             }
//             else if (humanChoice == 3 && computerChoice == 2) {
//                 console.log("scissors vs paper, player win!")
//                 humanScore++
//                 console.log(humanScore, computerScore);
//             }
//             else;
//             }

//     if (humanScore > computerScore) {
//         console.log("human wins!");
//     }
//     else if (computerScore > humanScore) {
//         console.log("computer wins !");
//     }
//     else {
//         console.log("tie !");
//     }
        
// }

// function functionToExec() {
//     playGame();
//     }