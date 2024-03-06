let playerScore = 0;
let computerScore = 0;
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


  function gameRound(){
    const playerSelection = prompt("Enter your choice: ");
    console.log(playerSelection);
    const pick = getComputerChoice();
    console.log(pick);
  if (playerSelection.toLowerCase() === pick){

    return winner = `Tie ${playerSelection} is same as ${pick}
player score is ${playerScore} to computer score ${computerScore}`

}
    else if (playerSelection.toLowerCase() === "paper" && pick === "rock" 
    || playerSelection.toLowerCase() === "rock" && pick === "scissors" 
    || playerSelection.toLowerCase() === "scissors" && pick === "paper"){

      playerScore += 1;
        return winner = `player wins, ${playerSelection} beats ${pick}
player score is ${playerScore} to computer score ${computerScore}`
 }
    else {
      computerScore += 1;
        return winner = `computer wins, ${pick} beats ${playerSelection}
player score is ${playerScore} to computer score ${computerScore}`}
    }


function playGame(playerSelection, pick){
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
console.log(playGame());
