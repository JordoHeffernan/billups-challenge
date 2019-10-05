import React from 'react';
import { connect } from 'react-redux';

import '../styles/Feedback.css';

export const Feedback = props => {
  let winOrLose;
  let fakeProps = { timesRight: 1, timesWrong: 0, bestOf: 1, result: "Right" }
  // let { timesRight, timesWrong, bestOf, result } = this.props
  let { timesRight, timesWrong, bestOf, result } = fakeProps

  if (timesRight > bestOf / 2) {
    winOrLose = "Win"
  }
  if (timesWrong > bestOf / 2) {
    winOrLose = "Lose"
  }
  return (
    <h2
      id="feedback"
      role="status"
      aria-live="assertive"
      aria-atomic="true"
    >
      {result} {winOrLose}
    </h2>
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