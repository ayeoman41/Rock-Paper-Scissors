let num = prompt("Type weapon number choice: 1=Rock, 2=Paper, 3=Scissors")
const choice = ['Rock', 'Paper', 'Scissors'];
const random = Math.floor(Math.random() *choice.length);
const randomChoice = choice[random];


function getComputerChoice(){
    console.log(randomChoice)
}

function player(num) {
    if (num == 1) {
        return choice[0]
    } else if (num == 2) {
        return choice[1]
    } else (num == 3) ;
        return choice[2]
    }

const playerSelection = player()
const computerSelection = getComputerChoice
    function playRound(playerSelection, computerSelection) {
        if (playerSelection == "Rock" && computerSelection == "Paper"){
            return ("You lose! Rock beats paper");
        } else if (playerSelection == "Paper" && computerSelection == "Scissors"){
            return ("You lose! Scissors beats paper");
        } else if (playerSelection == "Scissors" && computerSelection == "Rock"){
            return ("You lose! Rock beats paper");
        } else if (playerSelection == "Rock" && computerSelection == "Scissors"){
            return ("You Win! Scissors beats paper");
        } else if (playerSelection == "Paper" && computerSelection == "Rock"){
            return ("You win! Paper beats rock");
        } else if (playerSelection == "Scissors" && computerSelection == "Paper"){
            return ("You win! Scissors beats paper");
        } else (playerSelection === computerSelection)
            return ("Tie")
        }

console.log(playRound(player(num), computerSelection))