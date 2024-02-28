
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

    const pick = getComputerChoice();
  if (playerSelection.toLowerCase === pick){
    return winner = `Tie ${playerSelection} is same as ${pick}`;}
    else if (playerSelection.toLowerCase() === "paper" && pick === "rock" || playerSelection.toLowerCase() === "rock" && pick === "scissors" || playerSelection.toLowerCase() == "scissors" && pick === "paper"){
        return winner = `player wins, ${playerSelection} beats ${pick}`}
    else{
        return winner = `computer wins, ${pick} beats ${playerSelection}`}

}
console.log(gameRound());
