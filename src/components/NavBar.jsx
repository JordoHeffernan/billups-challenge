import React from 'react';
import { connect } from 'react-redux';

import { restartGame, toggleHelp } from '../store/actions';


import '../styles/NavBar.css';


export class NavBar extends React.Component {
  onRestart() {
    this.props.dispatch(restartGame());
  }

  onToggle() {
    this.props.dispatch(toggleHelp());
  }

  render() {
    return (
      <nav>
        <button
          type="button"
          name="howToPlay"
          id="howToPlay"
          className="navButton"
          onClick={() => this.onToggle()}
        >
          How To Play
    </button>
        <button
          type="button"
          name="newGame"
          id="newGame"
          className="navButton"
          onClick={() => this.onRestart()}
        >
          New Game
    </button>
      </nav>
    );
  }
}
const mapStateToProps = state => ({
  state: state
})

export default connect(mapStateToProps)(NavBar);