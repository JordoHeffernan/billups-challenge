import React from 'react';
import { connect } from 'react-redux';

import '../styles/Feedback.css';

export const Feedback = props => {
  // let fakeProps = { timesRight: 0, timesWrong: 0, bestOf: 1, lastGuessCorrect: null }
  // let { timesRight, timesWrong, bestOf, lastGuessCorrect } = fakeProps
  let { timesRight, timesWrong, bestOf, computerGuess, lastGuessResult, loading, winStatus } = props.state

  return (
    <div
      id="feedback"
      role="status"
      aria-live="assertive"
      aria-atomic="true"
    >
      {!loading && computerGuess && <h2>
        Computer guessed {computerGuess[0].toUpperCase() + computerGuess.substring(1)} you {lastGuessResult}
      </h2>}
      {winStatus && <h2>
        {winStatus}
      </h2>}
    </div>
  );
}

const mapStateToProps = state => ({
  state: state
})

export default connect(mapStateToProps)(Feedback)