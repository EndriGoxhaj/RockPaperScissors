
function getComputerChoice(ComputerChoice) {
    ComputerChoice =  Math.floor(Math.random() * 3);
    if (ComputerChoice == 0){
        return pick = "Rock"; }
        else if (ComputerChoice == 1){
            return pick = "Paper"; }
            else { 
                return pick = "scissors";
            }

  }
  console.log(getComputerChoice());