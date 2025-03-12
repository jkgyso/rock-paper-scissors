console.log('Hello World!')

/*
Create a new function named getComputerChoice.
Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.
Note: Some learners might think that arrays are necessary for this problem, but they aren’t. If you’re unfamiliar with arrays, don’t worry - they’ll be covered later in the curriculum.
Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.

PSEUDOCODE: 
    BEGIN 
        FUNCTION getComputerChoice() 
            
            choice <-- // Randomly assign a number from 1 to 3 using Math floor and Math random
            
            IF (choice = 1) THEN
                RETURN rock 
            ELSEIF(choice = 2) THEN
                RETURN paper
            ELSE 
                RETURN scissors 
            ENDIF
        ENDFUNCION
    END
*/

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

// console.log(getComputerChoice());

/*
Step 3: Write the logic to get the human choice
Your game will be played by a human player. You will write a function that takes the user choice and returns it.

Create a new function named getHumanChoice.
Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
Hint: Use the prompt method to get the user’s input.
You do not need to handle reprompting if the user enters an invalid input, as that would require things we will teach later. For now, just assume the user will always enter a valid choice.
Test what your function returns by using console.log.

PSEUDOCODE 

BEGIN
    FUNCTION getHumanChoice() 
        choice <-- Get the user's choice using prompt method 

        IF(choice == 'rock')
            RETURN 'Rock';
        ELSE IF(choice == 'paper')
            RETURN 'Paper';
        ELSE IF(choice == 'scissors')
            RETURN 'Scissors';
        ENDIF
    ENDFUNCTION
END 
*/

function getHumanChoice() {
    let choice = prompt('Please enter any of the following: Rock, Paper, Scissors');

    if(choice.toLowerCase() == 'rock') {
        return 'Rock';
    } else if(choice.toLowerCase() == 'paper') {
        return 'Paper';
    } else if(choice.toLowerCase() == 'scissors') {
        return 'Scissors';
    }
};

// console.log(getHumanChoice());

/*
Step 4: Declare the players score variables
Your game will keep track of the players score. You will write variables to keep track of the players score.

Create two new variables named humanScore and computerScore in the global scope.
Initialize those variables with the value of 0.

PSEUDOCODE: 

BEGIN 
    humanScore <-- 0
    computerScore <-- 0
END

*/
// let humanScore = 0;
// let computerScore = 0; 


/*
    Step 5: Write the logic to play a single round
Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

Create a new function named playRound.
Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
Increment the humanScore or computerScore variable based on the round winner.

rock beats scissors 
scissors beats paper 
paper beats rock 

BEGIN 
    FUNCTION playRound(humanChoice, computerChoice) 
        hchoice <-- make humanChoice case insensitive

        IF(choice == 'Rock' && computerChoice == 'Rock' || choice == 'Paper' && computerChoice == 'Paper' || choice == 'Scissors' && computerChoice == 'Scissors')
            RETURN 'It's a tie!'
        ELSE IF(choice == 'Rock' && computerChoice == 'Scissors' )
            INCREMENT humanScore
            RETURN 'You win! Rock beats Scissors.'
        ELSE IF(choice == 'Scissors' &&  computerChoice == 'Paper')
            INCREMENT humanScore
            RETURN 'You win! Scissors beat Paper.'
        ElSE IF(choice == 'Paper' && computerChoice == 'Rock')
            INCREMENT humanScore
            RETURN 'You win! Paper beats Rock.'

        ELSE IF(choice == 'Scissors' && computerChoice == 'Rock' )
            INCREMENT computerScore;
            RETURN 'You lose! Rock beats Scissors.'
        ELSE IF(choice == 'Paper' &&  computerChoice == 'Scissors')
            INCREMENT computerScore;
            RETURN 'You lose! Scissors beat Paper.'
        ElSE IF(choice == 'Rock' && computerChoice == 'Paper')
            INCREMENT computerScore;
            RETURN 'You lose! Paper beats Rock.'
        ENDIF 
    ENDFUNCTION 

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection)
END
*/

// function playRound(humanChoice, computerChoice) {

//     console.log(humanChoice);
//     console.log(computerChoice);

//     // Win: Rock beats Scissors 
//     if(humanChoice == 'Rock' && computerChoice == 'Scissors') {
//         console.log(`You win! ${humanChoice} beats ${computerChoice}`);
//         humanScore++;
//     // Win: Scissors beat Paper 
//     } else if(humanChoice == 'Scissors' && computerChoice == 'Paper') {
//         console.log(`You win! ${humanChoice} beat ${computerChoice}`);
//         humanScore++;
//     // Win: Paper beats Rock 
//     } else if(humanChoice == 'Paper' && computerChoice == 'Rock') {
//         console.log(`You win! ${humanChoice} beats ${computerChoice}`);
//         humanScore++;
//     // Lose: Rock beats Scissors
//     } else if(humanChoice == 'Scissors' && computerChoice == 'Rock') {
//         console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
//         computerScore++;
//     // Lose: Scissors beat Paper
//     } else if(humanChoice == 'Paper' && computerChoice == 'Scissors') {
//         console.log(`You lose! ${computerChoice} beat ${humanChoice}`);
//         computerScore++;
//     // Lose: Paper beats Rock 
//     } else if(humanChoice == 'Rock' && computerChoice == 'Paper') {
//         console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
//         computerScore++;
//     } else if(humanChoice == 'Rock' && computerChoice == 'Rock' || humanChoice == 'Paper' && computerChoice == 'Paper' || humanChoice == 'Scissors' && computerChoice == 'Scissors') {
//         console.log( 'It\'s a tie. No one wins');
//     } 

// }

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);
// console.log(`Human Score: ${humanScore}`);
// console.log(`Computer Score: ${computerScore}`);

/*
    Step 6: Write the logic to play the entire game
Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

Create a new function named playGame.
Move your playRound function and score variables so that they’re declared inside of the new playGame function
Play 5 rounds by calling playRound 5 times.
Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.

BEGIN
    FUNCION playGame()
        humanScore = 0;
        computerScore = 0
        playRound FUNCTION 
    
    IF (humanScore === 5)
        PRINT 'You win!'
    ELSE (computerScore === 5)
        PRINT 'Computer wins!'
    ENDFUNCTION

    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
END 

*/

function playGame() {
    let humanScore = 0;
    let computerScore = 0; 

    function playRound(humanChoice, computerChoice) {

        console.log(humanChoice);
        console.log(computerChoice);
    
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
