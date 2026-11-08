
function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 3);
    console.log("choice is : " + compChoice);
    
    if (compChoice === 0){
        return "rock";
    }
    else if(compChoice ===1 ){
        return "paper";
    }
    else{
        return "scissors";
    }
}

console.log(getComputerChoice());
