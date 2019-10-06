import React from 'react';
import { connect } from 'react-redux';

import '../styles/Scoreboard.css';

export const Scoreboard = props => {
  let { timesWrong, timesRight, } = props.state
  return (
    <div id="scoreboard">
      <h2>Scoreboard</h2>
      <h3>You: {timesRight}</h3>
      <h3>Computer: {timesWrong}</h3>
    </div>
  );
}

const mapStateToProps = state => ({
  state: state
})

export default connect(mapStateToProps)(Scoreboard)