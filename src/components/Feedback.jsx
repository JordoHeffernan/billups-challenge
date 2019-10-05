import React from 'react';
import { connect } from 'react-redux';

import '../styles/Feedback.css';
import { winOrLose, rightOrWrong } from "../utils/index"

export const Feedback = props => {
  let fakeProps = { timesRight: 0, timesWrong: 0, bestOf: 1, lastGuessCorrect: null }
  // let { timesRight, timesWrong, bestOf, lastGuessCorrect } = this.props
  let { timesRight, timesWrong, bestOf, lastGuessCorrect } = fakeProps

  let status = winOrLose(timesRight, timesWrong, bestOf)
  let result = rightOrWrong(lastGuessCorrect)
  return (
    <div
      id="feedback"
      role="status"
      aria-live="assertive"
      aria-atomic="true"
    >
      <h2>
        Win or Lose: {status}
      </h2>
      <h2>
        Result of Last Guess: {result}
      </h2>
    </div>
  );
}

// const mapStateToProps = state => ({
//   timesRight: state.timesRight,
//   timesWrong: state.timesWrong,
//   bestOf: state.bestOf,
//   result: state.result
// })

export default Feedback
// export default connect(mapStateToProps)(Feedback)