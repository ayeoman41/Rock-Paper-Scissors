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


    function playRound(playerSelection, computerSelection) {
        if (playerSelection === "Rock" && computerSelection === "Paper"){
            return ("You lose! Rock beats paper");
        } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
            return ("You lose! Scissors beats paper");
        } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
            return ("You lose! Rock beats paper");
        } else if (playerSelection === "Rock" && computerSelection === "Scissors"){
            return ("You Win! Scissors beats paper");
        } else if (playerSelection === "Paper" && computerSelection === "Rock"){
            return ("You win! Paper beats rock");
        } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
            return ("You win! Scissors beats paper");
        } else if (playerSelection === "Rock" && computerSelection === "Rock"){
            return ("Tie")
        } else if (playerSelection === "Paper" && computerSelection === "Paper"){
            return ("Tie")
        } else (playerSelection === "Scissors" && computerSelection === "Scissors")
            return ("Tie")
        }
    
    const computerSelection = getComputerChoice();
    const playerSelection = player(num)
    console.log(playRound(playerSelection, computerSelection));
