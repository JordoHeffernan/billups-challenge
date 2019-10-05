import React from 'react';
import { connect } from 'react-redux';

import '../styles/GuessSection.css';

export class GuessSection extends React.Component {
  onSubmit(e) {
    e.preventDefault();

    const value = e.target.value;
    console.log(value)
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <button
          type="button"
          name="rock"
          id="rock"
          className="guessButton"
          value="rock"
          onClick={e => this.onSubmit(e)}
        >
          Rock
        </button>
        <button
          type="button"
          name="paper"
          id="paper"
          className="guessButton"
          value="paper"
          onClick={e => this.onSubmit(e)}
        >
          Paper
        </button>
        <button
          type="button"
          name="scissors"
          id="scissors"
          className="guessButton"
          value="scissors"
          onClick={e => this.onSubmit(e)}
        >
          Scissors
        </button>
        <button
          type="button"
          name="lizard"
          id="lizard"
          className="guessButton"
          value="lizard"
          onClick={e => this.onSubmit(e)}
        >
          Lizard
        </button>
        <button
          type="button"
          name="spock"
          id="spock"
          className="guessButton"
          value="spock"
          onClick={e => this.onSubmit(e)}
        >
          Spock
        </button>
        <label>
          Best Of
        <select
            name="bestOf"
            id="bestOf"
          >
            <option value={1}>1</option>
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={7}>7</option>
          </select>
        </label>
      </form>
    );
  }
}

export default GuessSection
// export default connect ()(GuessSection)