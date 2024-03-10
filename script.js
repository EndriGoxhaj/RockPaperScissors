let playerScore = 0;
let computerScore = 0;
let playerSelection;
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
  function gameRound(playerSelection, pick){
    pick = getComputerChoice();
  if (playerSelection === pick){

    return winner = `Tie ${playerSelection} is same as ${pick}
player score is ${playerScore} to computer score ${computerScore}`

}
    else if (playerSelection === "paper" && pick === "rock" 
    || playerSelection === "rock" && pick === "scissors" 
    || playerSelection === "scissors" && pick === "paper"){

      playerScore += 1;
        return winner = `player wins, ${playerSelection} beats ${pick}
player score is ${playerScore} to computer score ${computerScore}`
 }
    else {
      computerScore += 1;
        return winner = `computer wins, ${pick} beats ${playerSelection}
player score is ${playerScore} to computer score ${computerScore}`}
    }

  const header = document.querySelector("#header");
  const game = document.querySelector("#game")

  const rock = document.querySelector("#rock");

  rock.addEventListener('click', () =>{
    playerSelection = "rock";
    gameRound(playerSelection);
    const winnerscore = document.createElement('H3');
    winnerscore.textContent = winner;
    game.appendChild(winnerscore);

  })

  const paper = document.querySelector("#paper");
  paper.addEventListener('click', () =>{
    playerSelection = "paper";
    console.log(gameRound(playerSelection));
  })
  const scissors = document.querySelector("#scissors");
  scissors.addEventListener('click', () =>{
    playerSelection = "scissors";
    console.log(gameRound(playerSelection));
  })


/*function playGame(){
  for(let i = 0; i < 5; i++){
  gameRound();
  console.log(winner);
  }
  
  if(playerScore > computerScore){
  return gameWinner = `Congratulations you won!`
  }
  else if ( computerScore > playerScore ){
    return gameWinner = `Sorry you lost, reload to try again.`
  }
  else{
    return gameWinner = ` it's a tie`
  } 

}
console.log(playGame());*/
