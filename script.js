const choice = ['Rock', 'Paper', 'Scissors'];
const random = Math.floor(Math.random() *choice.length);
const randomChoice = choice[random];

function getComputerChoice(){
    console.log(randomChoice)
}

getComputerChoice();
