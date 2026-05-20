/* test for console working: console.log("hello world") */

let humanScore = 0;
let compScore = 0;


function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3) +1; //randomly gens a num 1-3
    
    toString(compChoice); //turns randomly generated number 1-3 into string

    if (compChoice=="1") {
        compChoice = "rock";
    }
    
    if (compChoice=="2") {
        compChoice = "paper";
    }

    if (compChoice=="3") {
        compChoice = "sissors";
    }

    return compChoice;
    
}

//console.log("Computer Choice: " + getComputerChoice());



function getHumanChoice() { //function promts for player choice and returns it
    let humanChoice = document.querySelector('.btn');            //prompt("Please Enter Choice").toLowerCase();
    //humanChoice.addEventListener("click", () => humanChoice);
} 

const btns = document.querySelectorAll("button");
const result = document.getElementById("result");
btns.forEach((button) => {
    button.addEventListener("click", () => {
        result.innerText = "Your Choice: " + button.innerText;
    })
})

//console.log ("Human Choice: " + getHumanChoice());

function playRound(humanChoice, compChoice) {
    if ((humanChoice=="rock" && compChoice=="sissors") || //all instances where human wins
    (humanChoice=="paper" && compChoice=="rock") ||
    (humanChoice=="sissors" && compChoice=="paper")) {
        humanScore++;
        return "Player wins!";
    }

    if ((humanChoice=="rock" && compChoice=="paper") || //all instances where human loses
    (humanChoice=="paper" && compChoice=="sissors") ||
    (humanChoice=="sissors" && compChoice=="rock")) {
        compScore++;
        return "Computer wins!";
    } 

    if (humanChoice==compChoice) { //in case of a tie
        return "It's a tie";
    }
}

/*const humanSelection = getHumanChoice();
const compSelection = getComputerChoice();

 console.log(playRound(humanSelection, compSelection));
console.log("Computer Score: " + compScore);
console.log("Player Score: " + humanScore); */

//function playGame() {
   // for (let i = 0; i < 5; i++) {
       // const humanSelection = getHumanChoice();
        //const compSelection = getComputerChoice();  
        /*console.log(playRound(humanSelection, compSelection));
        console.log("Player Choice: " + humanSelection + " vs " + "Computer Choice: " + compSelection);
        console.log("Computer Score: " + compScore);
        console.log("Player Score: " + humanScore);*/
   // }

//}

//console.log(playGame());

console.log("Final Scores:");
console.log("Computer Score: " + compScore);
console.log("Player Score: " + humanScore);

if (compScore > humanScore) {
    console.log("Computer Wins");
}

if (compScore < humanScore) {
    console.log("Player Wins");
}

if (compScore == humanScore) {
    console.log("Its a tie");
}