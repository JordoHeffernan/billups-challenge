import React from 'react';
import { connect } from 'react-redux';

import { toggleHelp } from '../store/actions';

import '../styles/HowToPlay.css';

export class HowToPlay extends React.Component {
  onToggle() {
    this.props.dispatch(toggleHelp());
  }
  render() {
    return (
      <section id="howTo">
        <h2>What do I do?</h2>
        <p>This is a more advanced version of Rock Paper Scissors</p>
        <ul>
          <li>Pick one of the options below</li>
          <li>When you hit submit, I will randomly select one of the other options</li>
          <li>Below you will get feedback on who won each round</li>
          <li>You can select how many rounds we are playing "the best of"</li>
          <li>The scoreboard shows the the score of the current game.</li>
          <li>Whoever wins the necessary rounds first, wins the game!</li>
          <li>You can press "New Game" at any time to reset</li>
          <li>For a detailed description of the rules and more <a href="http://www.samkass.com/theories/RPSSL.html">click here</a></li>
        </ul>
        <button
          type="button"
          name="close"
          id="close"
          className="navButton"
          onClick={() => this.onToggle()}
        >
          Go Back to Game
        </button>
      </section>
    );
  }
}
export default connect()(HowToPlay);
