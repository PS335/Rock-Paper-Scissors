function getComputerChoice(){
    let computerPick = Math.floor(Math.random() * 3);
    
    if (computerPick === 0){
        console.log("Computer's choice: rock");
        return "rock";
    }
    else if(computerPick ===1 ){
        console.log("Computer's choice: paper");
        return "paper";
    }
    else{
        console.log("Computer's choice: scissors");
        return "scissors";
    }
}

function getHumanChoice(){
    let yourChoice = prompt("Enter your choice: " , 'rock');
    console.log("Your Choice: " +yourChoice);
    return yourChoice;
} 

let humanScore = 0;
let computerScore = 0;
let gameTied = 0

function playRound(humanChoice, computerChoice){
    let humanInput = humanChoice.toLowerCase();
    
        //Computer winning condition
        if(computerChoice === "rock" && humanInput === "scissors"){
            computerScore++;
            console.log("You Lose! Rock beats Scissors");
        }

        else if(computerChoice === "scissors" && humanInput == "paper") {
            computerScore++;
            console.log("You lose! Scissors beats paper");
        }
        else if(computerChoice === "paper" && humanInput === "rock"){
            computerScore++;
            console.log("You Lose! Paper beats Rock");
        }
        //You winning conditions
        else if(computerChoice === "rock" && humanInput === "paper"){
            humanScore++;
            console.log("You Win!! Paper beats Rock");
        }
        else if(computerChoice === "paper" && humanInput === "scissors"){
            humanScore++;
            console.log("You Win!! Scisssors beats Paper");   
        }
        else if(computerChoice === "scissors" && humanInput === "rock"){
            humanScore++;
            console.log("You Win!! Rock beats Scissors");
        }
        //Game Tied condition
        else if(computerChoice === humanInput){
        console.log("Game Tied...Try again"); 
        gameTied++;
        }
        else{
            console.log("Invalid Input");
        }  
 }
 
function playGame(){
    for(let i = 1 ; i <= 5 ; i++){
        console.log(`---Round of ${i} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection); 
    }
    if(computerScore < humanScore){
      console.log("***You Win***");
    }
    else{
        console.log("***Computer Wins.***");
    }
    console.log("Final Score: Yours: \n" + humanScore + "\n" + "Computer: " + computerScore + "\n" + "Game Tied: " + gameTied);
}

playGame();
