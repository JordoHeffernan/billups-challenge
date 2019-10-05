import React from 'react';
import { connect } from 'react-redux';

import '../styles/NavBar.css';

export const NavBar = props => (
  <nav>
    <button
      type="button"
      name="howToPlay"
      id="howToPlay"
      className="navButton"
      onClick={() => console.log("howToPlay clicked")}
    >
      How To Play
    </button>
    <button
      type="button"
      name="newGame"
      id="newGame"
      className="navButton"
      onClick={() => console.log("newGame clicked")}
    >
      New Game
    </button>
  </nav>
);

export default (NavBar);
// export default connect()(NavBar);