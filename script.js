const choice = ['Rock', 'Paper', 'Scissors'];
const random = Math.floor(Math.random() *choice.length);
const randomChoice = choice[random];

function getComputerChoice(){
    console.log(randomChoice)
}

getComputerChoice();

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
    } else {
        return ("Tie")
    }
}