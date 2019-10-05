
export const winOrLose = (timesRight, timesWrong, bestOf) => {
  if (timesRight > bestOf / 2) {
    return "Win"
  }
  if (timesWrong > bestOf / 2) {
    return "Lose"
  }
  return "Keep Guessing!"
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