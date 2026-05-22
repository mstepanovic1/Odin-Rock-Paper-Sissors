/* test for console working: console.log("hello world") */

let humanScore = 0;
let compScore = 0;


function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3) +1; //randomly gens a num 1-3
    
    toString(compChoice); //turns randomly generated number 1-3 into string

    if (compChoice=="1") {
        compChoice = "Rock";
    }
    
    if (compChoice=="2") {
        compChoice = "Paper";
    }

    if (compChoice=="3") {
        compChoice = "Scissors";
    }
    cChoice.innerText = "Computer Choice: " + compChoice; //somehow i gotta call this/make it so when player selects a choice, it runs this function to get computer choice at same time, rn, its just displaying undefined
    return compChoice;
    
}



function getHumanChoice() { //function promts for player choice and returns it
    const btns = document.querySelectorAll("button");
    const result = document.getElementById("result");
    btns.forEach((button) => {
        button.addEventListener("click", () => {
            pChoice.innerText = "Your Choice: " + button.innerText;
            let humanChoice = button.innerText;
            return humanChoice;
        })
    })
} 


document.addEventListener('click', function(event) { //when any button is clicked, run play round function
    if (event.target.tagName === "BUTTON") {
        playGame();
    }
});

function playRound(humanChoice, compChoice) {
    if ((humanChoice=="rock" && compChoice=="scissors") || //all instances where human wins
    (humanChoice=="paper" && compChoice=="rock") ||
    (humanChoice=="scissors" && compChoice=="paper")) {
        humanScore++;
        Winner.innerText = "Player Wins!";
        //return "Player wins!";
    }

    if ((humanChoice=="rock" && compChoice=="paper") || //all instances where human loses
    (humanChoice=="paper" && compChoice=="scissors") ||
    (humanChoice=="scissors" && compChoice=="rock")) {
        compScore++;
        Winner.innerText = "Computer Wins!";
        //return "Computer wins!";
    } 

    if (humanChoice==compChoice) { //in case of a tie
        Winner.innerText = "It's a tie!";
        //return "It's a tie";
    }
}

/*const humanSelection = getHumanChoice();
const compSelection = getComputerChoice();

 console.log(playRound(humanSelection, compSelection));
console.log("Computer Score: " + compScore);
console.log("Player Score: " + humanScore); */

function playGame() {
    //for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const compSelection = getComputerChoice();
        playRound(humanSelection, compSelection);  
        //console.log(playRound(humanSelection, compSelection));
        //console.log("Player Choice: " + humanSelection + " vs " + "Computer Choice: " + compSelection);
        //console.log("Computer Score: " + compScore);
        //console.log("Player Score: " + humanScore);
    //}

}

//playGame();

//console.log("Final Scores:");
//console.log("Computer Score: " + compScore);
//console.log("Player Score: " + humanScore);

if (compScore > humanScore) {
    console.log("Computer Wins");
}

if (compScore < humanScore) {
    console.log("Player Wins");
}

if (compScore == humanScore) {
    console.log("Its a tie");
}