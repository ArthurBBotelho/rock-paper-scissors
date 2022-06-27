
//VARIABLES
const move = ["Rock", "Paper", "Scissor"];
let rockuser 
let computerMove
let indexRandom


function computerPlay(){
    //RANDOMLY RETURN 'ROCK PAPER SCISSORS'
    indexRandom = Math.floor (Math.random() * 3);
    computerMove = move[indexRandom]
        
}

function rockplay(){
    computerPlay()
    rockuser = "Rock"

    if (computerMove === "Rock") {
    return("Tie")
    } else if
    (computerMove === "Scissor") {
    return("User wins") 
    } else 
    return("Computer wins")
    
}

function paperplay(){
    computerPlay()
    rockuser = "Paper"

    if (computerMove === "Paper") {
    return("Tie")
    } else if
    (computerMove === "Rock") {
    return("User wins") 
    } else 
    return("Computer wins")
    
}

function scissorplay(){
    computerPlay()
    rockuser = "Scissor"

    if (computerMove === "Scissor") {
    return("Tie")
    } else if
    (computerMove === "Paper") {
    return("User wins") 
    } else 
    return("Computer wins")
    
}
