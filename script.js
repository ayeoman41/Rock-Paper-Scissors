let num = prompt("Type weapon number choice: 1=Rock, 2=Paper, 3=Scissors");
if (isNaN(num) ||
    (num > 3 || num < 1)
) {
    alert("Please enter an number between 1-3");
}

const choice = ['Rock', 'Paper', 'Scissors'];
console.log('You chose: ' + choice[num - 1]);

const playerSelection = choice[num - 1];
const random = Math.floor(Math.random() * choice.length);
const computerSelection = choice[random];
console.log('Opponent chose: ' + computerSelection);

alert(playRound(num - 1, random));

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (playerSelection > computerSelection) {
        if (computerSelection == 0 && playerSelection == choice.length - 1) {
            return "You lose! " + choice[computerSelection] + " beats " + choice[playerSelection];
        }
        return "You win! " + choice[playerSelection] + " beats " + choice[computerSelection];
    } else if (computerSelection == choice.length - 1 && playerSelection == 0) {
        return "You win! " + choice[playerSelection] + " beats " + choice[computerSelection];
    } else if (computerSelection > playerSelection) {
        if (playerSelection == 0 && computerSelection == choice.length - 1) {
            return "You win! " + choice[playerSelection] + " beats " + choice[computerSelection];
        }
        return "You lose! " + choice[computerSelection] + " beats " + choice[playerSelection];
    } else if (playerSelection == choice.length - 1 && computerSelection == 0) {
        return "You lose! " + choice[computerSelection] + " beats " + choice[playerSelection];
    }
}

// Unit tests
console.assert(playRound(0, 0) === "Tie", "This should be a tie");
console.assert(playRound(1, 1) === "Tie", "This should be a tie");
console.assert(playRound(2, 2) === "Tie", "This should be a tie");
console.assert(playRound(0, 2) === "You win! Rock beats Scissors", "Rock beats scissors");
console.assert(playRound(2, 0) === "You lose! Rock beats Scissors", "Rock beats scissors");
console.assert(playRound(0, 1) === "You lose! Paper beats Rock", "Paper beats rock");
console.assert(playRound(1, 0) === "You win! Paper beats Rock", "Paper beats rock");
console.assert(playRound(1, 2) === "You lose! Scissors beats Paper", "Scissors beats paper");
console.assert(playRound(2, 1) === "You win! Scissors beats Paper", "Scissors beats paper");
