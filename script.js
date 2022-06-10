
//VARIABLES
const move = ["Rock", "Paper", "Scissors"];
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
    (computerMove === "Scissors") {
    return("User wins") 
    } else 
    return("Computer wins")
    
}

document.getElementById("result").innerHTML

function whoWins(){
    computerPlay()
    console.log("Computer: ", computerMove)
    console.log("User: ", userPlay)

    if (computerMove === "Rock" && userPlay === "Rock") {
    return("Tie")
    } else if
    (computerMove === "Rock" && userPlay === "Scissors") {
    return("Computer wins") 
    } else if
    (computerMove === "Rock" && userPlay === "Paper") {
    return("User wins") 
    } else if
    (computerMove === "Paper" && userPlay === "Paper") {
    return("Tie") 
    } else if
    (computerMove === "Paper" && userPlay === "Scissors") {
    return("User wins") 
    } else if
    (computerMove === "Paper" && userPlay === "Rock") {
    return("Computer wins") 
    } else if
    (computerMove === "Scissors" && userPlay === "Scissors") {
    return("Tie") 
    } else if
    (computerMove === "Scissors" && userPlay === "Paper") {
    return("Computer wins") 
    } else
    return("User wins") 
    
}

