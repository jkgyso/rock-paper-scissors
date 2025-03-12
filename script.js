console.log('Hello World!')

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if(choice == 1) {
        return 'Rock';
    } else if(choice == 2) {
        return 'Paper';
    } else if(choice == 3) {
        return 'Scissors';
    }
}


function getHumanChoice() {
    let choice = prompt('Please enter any of the following: Rock, Paper, or Scissors');

    if(choice.toLowerCase() == 'rock') {
        return 'Rock';
    } else if(choice.toLowerCase() == 'paper') {
        return 'Paper';
    } else if(choice.toLowerCase() == 'scissors') {
        return 'Scissors';
    }
};

function playGame() {
    let humanScore = 0;
    let computerScore = 0; 

    function playRound(humanChoice, computerChoice) {

        console.log(`Human Choice: ${humanChoice}`);
        console.log(`Computer Choice: ${computerChoice}`);
    
        // Win: Rock beats Scissors 
        if(humanChoice == 'Rock' && computerChoice == 'Scissors') {
            humanScore++;
            return `You win! ${humanChoice} beats ${computerChoice}`;
            
        // Win: Scissors beat Paper 
        } else if(humanChoice == 'Scissors' && computerChoice == 'Paper') {
            humanScore++;
            return `You win! ${humanChoice} beat ${computerChoice}`;
            
        // Win: Paper beats Rock 
        } else if(humanChoice == 'Paper' && computerChoice == 'Rock') {
            humanScore++;
            return `You win! ${humanChoice} beats ${computerChoice}`;
            
        // Lose: Rock beats Scissors
        } else if(humanChoice == 'Scissors' && computerChoice == 'Rock') {
            computerScore++;
            return `You lose! ${computerChoice} beats ${humanChoice}`;
            
        // Lose: Scissors beat Paper
        } else if(humanChoice == 'Paper' && computerChoice == 'Scissors') {
            computerScore++;
            return `You lose! ${computerChoice} beat ${humanChoice}`;
            
        // Lose: Paper beats Rock 
        } else if(humanChoice == 'Rock' && computerChoice == 'Paper') {
            computerScore++;
            return `You lose! ${computerChoice} beats ${humanChoice}`;
            
        } else if(humanChoice == 'Rock' && computerChoice == 'Rock' || humanChoice == 'Paper' && computerChoice == 'Paper' || humanChoice == 'Scissors' && computerChoice == 'Scissors') {
            return 'It\'s a tie. No one wins';
        } 
    
    }

    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);

    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
    
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
    
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
    
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);

   

    if(humanScore > computerScore) {
        return 'You win!';
    } else if(humanScore < computerScore) {
        return 'Computer wins!';
    } else {
        return 'No winner!'
    }
}

console.log(playGame());
