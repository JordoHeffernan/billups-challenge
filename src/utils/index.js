
export const winOrLose = (timesRight, timesWrong, bestOf) => {
  if (timesRight > bestOf / 2) {
    return "You win!"
  }
  if (timesWrong > bestOf / 2) {
    return "You lose!"
  }
  return ""
};

export const rightOrWrong = lastGuessCorrect => {
  switch (lastGuessCorrect) {
    case true:
      return "Right!"
    case false:
      return "Wrong!"
    default:
      return "Make A Guess!"
  }
}

export const computerGuessToWords = num => {
  switch (num) {
    case num >= 1 && num <= 20:
      return "Rock"
    case num >= 21 && num <= 40:
      return "Paper"
    case num >= 41 && num <= 60:
      return "Scissors"
    case num >= 61 && num <= 80:
      return "Lizard"
    case num >= 81 && num <= 100:
      return "Spock"
    default:
      return ""
  }

}

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