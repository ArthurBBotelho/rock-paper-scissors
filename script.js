//GET ELEMENTS



//VARIABLES
const move = ["Rock", "Paper", "Scissors"];
let userPlay = "Scissors"
let indexRandom
let computerMove

function computerPlay(){
    //RANDOMLY RETURN 'ROCK PAPER SCISSORS'
    
    indexRandom = Math.floor (Math.random() * 3);
    computerMove = move[indexRandom]
        
}

function whoWins(){
    computerPlay()
    console.log("Computer: ", computerMove)
    console.log("User: ", userPlay)

    if (computerMove === "Rock" && userPlay === "Rock") {
    console.log("Tie")
    } else if 
    (computerMove === "Rock" && userPlay === "Scissors") {
    console.log("Computer wins") 
    } else if
    (computerMove === "Rock" && userPlay === "Paper") {
    console.log("User wins") 
    } else if
    (computerMove === "Paper" && userPlay === "Paper") {
    console.log("Tie") 
    } else if
    (computerMove === "Paper" && userPlay === "Scissors") {
    console.log("User wins") 
    } else if
    (computerMove === "Paper" && userPlay === "Rock") {
    console.log("Computer wins") 
    } else if
    (computerMove === "Scissors" && userPlay === "Scissors") {
    console.log("Tie") 
    } else if
    (computerMove === "Scissors" && userPlay === "Paper") {
    console.log("Computer wins") 
    } else
    console.log("User wins") 
    
}