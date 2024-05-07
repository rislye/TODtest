
function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

 function getHumanChoice() {
    let lowerCaseChoice = prompt("rocks, paper or scissors");
    let humanChoice = lowerCaseChoice.toLowerCase();
    if (humanChoice == "rocks") {
        return 1;
    }
    else if (humanChoice == "paper") {
        return 2;
    }
    else if (humanChoice == "scissors") {
        return 3;
    }
    else {
            console.log("Wrong input"); 
            getHumanChoice(); 
    }
 }

    function playGame() {
    let humanScore = 0
    let computerScore = 0
    
        for (let i = 0; i < 5; i++) {
            const humanChoice = getHumanChoice();
            const computerChoice = getComputerChoice(1, 3);
            playRound(humanChoice, computerChoice)
        }
            function playRound(humanChoice, computerChoice) {
                if (humanChoice == computerChoice) {
                    console.log("its a tie !")
                    console.log(humanScore, computerScore);
                }
                else if (humanChoice == 1 && computerChoice == 2) {
                    console.log("rocks vs paper, computer win!")
                    computerScore++
                    console.log(humanScore, computerScore);
                }
                else if (humanChoice == 1 && computerChoice == 3) {
                    console.log("rocks vs scissors, player win!")
                    humanScore++
                    console.log(humanScore, computerScore);
                }
                else if (humanChoice == 2 && computerChoice == 1) {
                    console.log("paper vs rocks, player win!")
                    humanScore++
                    console.log(humanScore, computerScore);
                }
                else if (humanChoice == 2 && computerChoice == 3) {
                    console.log("paper vs scissors, computer win!")
                    computerScore++
                    console.log(humanScore, computerScore);
                }
                else if (humanChoice == 3 && computerChoice == 1) {
                    console.log("scissors vs rocks, computer win!")
                    computerScore++
                    console.log(humanScore, computerScore);
                }
                else if (humanChoice == 3 && computerChoice == 2) {
                 console.log("scissors vs paper, player win!")
                    humanScore++
                    console.log(humanScore, computerScore);
                }
                else;
            }

    if (humanScore > computerScore) {
        console.log("human wins!")
    }
    else if (computerScore > humanScore) {
        console.log("computer wins !")
    }
    else {
        console.log("tie !")
    }
        
}


function functionToExec() {
    playGame()
    }



 


/*
function playRound(humanChoice, computerChoice) {
        
    if (humanChoice == computerChoice) {
        console.log("it's a tie !")
    }
    else if (humanChoice == 1 && computerChoice == 3 ||
            humanChoice == 2 && computerChoice == 1 ||
            humanChoice == 3 && computerChoice == 2) {
            console.log("you win the round !")
            humanScore++
            }
    else {
            console.log("you lose the round !")
            computerScore++
            }
}
/*
function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("it's a tie !")
    }
    else if (humanChoice == 1 && computerChoice == 3 ||
             humanChoice == 2 && computerChoice == 1 ||
             humanChoice == 3 && computerChoice == 2) {
                console.log("player win !")
                return humanScore++
             }
    else if (humanChoice == 1 && computerChoice == 2 ||
             humanChoice == 2 && computerChoice == 3 ||
             humanChoice == 3 && computerChoice == 1) {
                console.log("computer win !")
                return computerScore++
             }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(1, 3);
*/