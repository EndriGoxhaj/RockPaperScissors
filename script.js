let player = 0;
let computer = 0;
let playerSelection;


// Random choice function//
function getComputerChoice() {
  let Bet =  Math.floor(Math.random() * 3);
    if (Bet == 0){
        return pick = "rock"; }
        else if (Bet == 1){
            return pick = "paper"; }
            else { 
                return pick = "scissors";
            };
  }

  //function for logic of the game//
  function gameRound(playerSelection, pick){
    pick = getComputerChoice();
  if (playerSelection === pick){

    return winner = "Round is tied"
}
    else if (playerSelection === "paper" && pick === "rock" 
    || playerSelection === "rock" && pick === "scissors" 
    || playerSelection === "scissors" && pick === "paper"){

      player += 1;
      return winner = "Round Won!"
}
    else {
      computer += 1;
        return winner = "Round lost!"
}
    }

    //function to end the game after one player reaches the score of 5//
    function playgame(){
      if( player === 5 && player > computer){
        player = 0;
        computer = 0;
        winner = "";
        playerSelection = "";
        pick = "";
        winner = "";
        playerpick.textContent = "";
        computerpick.textContent = "";
        playerScore.textContent = "";
        computerScore.textContent = "";

        thegame.removeChild(narrator);
        thegame.removeChild(buttons);
        thegame.removeChild(choice);
        thegame.removeChild(score);
        gamewinner.textContent = "Player wins click the button to reset!";
        thegame.appendChild(gamewinner);
        thegame.appendChild(reset);
      }
      else if ( computer === 5 && computer > player ){
        player = 0;
        computer = 0;
        winner = "";
        thegame.removeChild(narrator);
        thegame.removeChild(buttons);
        thegame.removeChild(choice);
        thegame.removeChild(score);
        gamewinner.textContent = "Computer wins :( click the button to reset!";
        thegame.appendChild(gamewinner);
        thegame.appendChild(reset);
      }
    }
//parent divs//
  let thegame = document.querySelector("#thegame");

  let info = document.querySelector("#info");

  let buttons = document.createElement('div');
  buttons.style.display = 'flex';
  buttons.style.gap = '70px';
  buttons.style.justifyContent = 'space-between';

  let choice = document.querySelector("#choice");

  let score = document.querySelector("#score");

  let narrator = document.querySelector("#narrator");


//buttons//
  let rock = document.createElement('button');
  rock.textContent = "Rock"

  let paper = document.createElement('button');
  paper.textContent = "Paper"

  let scissors = document.createElement('button');
  scissors.textContent = "Scissors";

  let play = document.querySelector("#play");

  let reset = document.createElement('button');
  reset.textContent = "Reset";

  buttons.appendChild(rock);
  buttons.appendChild(paper);
  buttons.appendChild(scissors);
  //buttons end//

  
 //divs to contain the info of the game//
  const playerpick = document.createElement('div');
  playerpick.setAttribute("style", "color : white")
  playerpick.style.fontSize = "20px";

  const computerpick = document.createElement('div');
  computerpick.setAttribute("style", "color : white")
  computerpick.style.fontSize = "20px";

  let playerScore = document.createElement('div');
  playerScore.setAttribute("style", "color : white")
  playerScore.style.fontSize = "20px";

  let computerScore = document.createElement('div');
  computerScore.setAttribute("style", "color : white")
  computerScore.style.fontSize = "20px";

  let roundwinner = document.createElement('div')
  roundwinner.setAttribute("style", "color : white")
  roundwinner.style.fontSize = "25px";

  let gamewinner = document.createElement('h2');
  gamewinner.style.color = "white";
  ////////////////////////////////

//button functions//
  rock.addEventListener('click', () =>{
    playerSelection = "rock";
    playgame(gameRound(playerSelection));

    playerpick.textContent = `Player choice : ${playerSelection}`;
    computerpick.textContent = `Computer choice : ${pick}`; 

    playerScore.textContent  = `Player score : ${player}`;
    computerScore.textContent = `Computer score : ${computer}`;

    roundwinner.textContent = winner;

    choice.appendChild(playerpick);
    choice.appendChild(computerpick);
    score.appendChild(playerScore);
    score.appendChild(computerScore);
    narrator.appendChild(roundwinner);

  })

  
  paper.addEventListener('click', () =>{
    playerSelection = "paper";
    
    playgame(gameRound(playerSelection));

    playerpick.textContent = `You chose ${playerSelection}`;
    computerpick.textContent = `Computer chooses ${pick}`; 

    playerScore.textContent  = `Player score : ${player}`;
    computerScore.textContent = `Computer score : ${computer}`;
    roundwinner.textContent = winner;

    choice.appendChild(playerpick);
    choice.appendChild(computerpick);
    score.appendChild(playerScore);
    score.appendChild(computerScore);
    narrator.appendChild(roundwinner);
  })

  
  scissors.addEventListener('click', () =>{
    playerSelection = "scissors";
    playgame(gameRound(playerSelection));

    playerpick.textContent = `You chose ${playerSelection}`;
    computerpick.textContent = `Computer chooses ${pick}`; 

    playerScore.textContent  = `Player score : ${player}`;
    computerScore.textContent = `Computer score : ${computer}`;
    roundwinner.textContent = winner;

    choice.appendChild(playerpick);
    choice.appendChild(computerpick);
    score.appendChild(playerScore);
    score.appendChild(computerScore);
    narrator.appendChild(roundwinner);
  })

  play.addEventListener('click', () =>{
    thegame.removeChild(info);
    thegame.removeChild(play);
   

    thegame.appendChild(choice);
    thegame.appendChild(score);
    thegame.insertBefore(buttons, score);
    thegame.appendChild(narrator);

  })

  reset.addEventListener('click', ()=>{
    thegame.removeChild(reset);
    thegame.removeChild(gamewinner);
    thegame.appendChild(info);
    thegame.appendChild(play);
   

  })

 
 



  