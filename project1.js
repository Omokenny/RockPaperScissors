function getComputerChoice() {
    const items = ['rock', 'paper', 'scissors'];
    randomItem = items[Math.floor(Math.random() * items.length)]
    return randomItem;
}
let computerScore = 0;
let playerScore = 0;
// console.log(getComputerChoice());

function playRound() {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt('choose among rock,paper,scissors', 'rock')
    console.log(computerSelection);



    if (computerSelection === 'rock' && playerSelection === 'rock') {
        return 'There is a tie'
    }
    if (computerSelection === 'rock' && playerSelection === 'paper') {
        playerScore++
        return 'You win!, paper covers rock'
    }


    if (computerSelection === 'rock' && playerSelection === 'scissors') {
        computerScore++
        return 'Computer win!, rock beats scissors'
    }


    if (computerSelection === 'paper' && playerSelection === 'paper') {
        return 'There is a tie'
    }
    if (computerSelection === 'paper' && playerSelection === 'rock') {
        computerScore++
        return 'Computer win!, paper covers rock'
    }

    if (computerSelection === 'paper' && playerSelection === 'scissors') {
        playerScore++
        return 'You win!,scissors cuts paper'
    }

    if (computerSelection === 'scissors' && playerSelection === 'scissors') {
        return 'There is a tie'
    }
    if (computerSelection === 'scissors' && playerSelection === 'rock') {
        playerScore++
        return 'You win!, rock beats scissors'
    }


    if (computerSelection === 'scissors' && playerSelection === 'paper') {
        computerScore++
        return 'Computer wins, scissors cuts paper'
    }

}


function game() {

    for (let i = 0; i < 5; i++) {

        // if (computerScore >= 3) {
        //     console.log('Computer wins')
        //     return
        // } else if (playerScore >= 3) {
        //     console.log('Player wins')
        //     return
        // } else {
            console.log(playRound())
            console.log({ playerScore, computerScore })

    }
    
    if(playerScore > computerScore) {
        console.log('Player wins!')
    }else{
        console.log('Computer wins')
    }
}


    game();
