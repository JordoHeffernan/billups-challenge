
export const winOrLose = (timesRight, timesWrong, bestOf) => {
  if (timesRight > bestOf / 2) {
    return "You win!"
  }
  if (timesWrong > bestOf / 2) {
    return "You lose!"
  }
  return "Make a guess"
};