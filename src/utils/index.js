
export const winOrLose = (timesRight, timesWrong, bestOf) => {
  if (timesRight > bestOf / 2) {
    return "You win!"
  }
  if (timesWrong > bestOf / 2) {
    return "You lose!"
  }
  return "Make a guess."
};

export const rockPaperScissors = (humanGuess, computerGuess) => {
  switch (humanGuess) {
    case "rock":
      switch (computerGuess) {
        case "rock":
          return 0
        case "scissors":
        case "lizard":
          return 1
        case "spock":
        case "paper":
          return -1
        default:
          return 0
      }
    case "paper":
      switch (computerGuess) {
        case "paper":
          return 0
        case "rock":
        case "spock":
          return 1
        case "scissors":
        case "lizard":
          return -1
        default:
          return 0
      }
    case "scissors":
      switch (computerGuess) {
        case "scissors":
          return 0
        case "paper":
        case "lizard":
          return 1
        case "rock":
        case "spock":
          return -1
        default:
          return 0
      }
    case "lizard":
      switch (computerGuess) {
        case "lizard":
          return 0
        case "spock":
        case "paper":
          return 1
        case "scissors":
        case "rock":
          return -1
        default:
          return 0
      }
    case "spock":
      switch (computerGuess) {
        case "spock":
          return 0
        case "scissors":
        case "rock":
          return 1
        case "lizard":
        case "paper":
          return -1
        default:
          return 0
      }
    default:
      break
  }

}