
const pPoints = document.getElementById('ppoints');
const cPoints = document.getElementById('cpoints');
const buttons = document.querySelectorAll("button");
const report = document.getElementById('report');
const resultDiv= document .createElement('div');
const message = document.createElement('h2');


let roundResult= "";
let compuerSelction;
let playerScore = 0;
let computerScore = 0;

//computerPlay function chooses randomly from bps array
function computerPlay(){
    let bps = ["Boulder", "Parchment", "Shears"];
    let random =[Math.floor(Math.random()*bps.length)];
    computerSelection = bps[random];
};

//playeSelection
buttons.forEach(function (button) {
    button.addEventListener('click', () => computerPlay());
    button.addEventListener('click', (e) => playRound(e.target.id, computerSelection));
   button.addEventListener('click', () => showResult(computerSelection, roundResult));
});

// player selection and decides winner of round
function playRound(playerSelection,computerSelection){
    if( (playerSelection === "Boulder" && computerSelection ==="Shears") ||
        (playerSelection === "Parchment" && computerSelection ==="Boulder")||
        (playerSelection === "Shears" && computerSelection ==="Parchment")){
            playerScore++
            roundResult = "You win! "+playerSelection+" annihalates "+computerSelection+ "!";
        }
    else if((playerSelection === "Boulder" && computerSelection ==="Parchment") ||
            (playerSelection === "Parchment" && computerSelection === "Shears") ||
            (playerSelection === "Shears" && computerSelection ==="Boulder")){
                computerScore++;
                roundResult = "You Lose! "+computerSelection+" obliterates "+playerSelection+ "!";
            }
    else roundResult="Draw!";
    };

    function showResult(computerSelection, roundResult) {
        pPoints.innerHTML = playerScore;
        cPoints.innerHTML = computerScore;
        report.innerHTML = '<br>Computer chose ' + computerSelection + '<br>' +roundResult;

    
        if (playerScore === 5 || computerScore === 5) {
            message.textContent = (playerScore === 5) ? 'You win!' : 'You lose!';
            message.style.color = (playerScore === 5) ? 'green' : 'red';
            report.appendChild(message);
            
            playerScore = 0;
            computerScore = 0;
        }
    }
    
