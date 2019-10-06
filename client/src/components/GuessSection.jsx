import React from 'react';
import { connect } from 'react-redux';

import HowToPlay from "./HowToPlay"
import { setBestOf, handleInput, getGuess } from '../store/actions';

import '../styles/GuessSection.css';

export class GuessSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noPick: false
    };
  }
  onSelect(e) {
    e.preventDefault();
    const value = e.target.value;
    this.props.dispatch(setBestOf(value));
  }
  onChange(e) {
    e.preventDefault();
    const value = e.target.value;
    this.props.dispatch(handleInput(value));
  }
  onSubmit(e) {
    e.preventDefault();
    if (!this.props.state.humanGuess) {
      console.log("make a pick!")
      this.setState({ noPick: true })
      return;
    }
    this.props.dispatch(getGuess(this.props.state.humanGuess));
  }

  render() {
    let { helpOpen, winStatus } = this.props.state
    return (
      <div>
        {helpOpen && <HowToPlay />}
        {!helpOpen && (winStatus === "Make a guess") &&
          < form onSubmit={e => this.onSubmit(e)} className="guessSection" >
            <label>
              Best Of
            </label>
            <select
              name="bestOf"
              id="bestOf"
              value={this.props.state.bestOf}
              onChange={e => this.onSelect(e)}
            >
              <option value={1}>1 Round</option>
              <option value={3}>3 Rounds</option>
              <option value={5}>5 Rounds</option>
              <option value={7}>7 Rounds</option>
            </select>
            <button
              type="button"
              name="rock"
              id="rock"
              className="guessButton"
              value="rock"
              onClick={e => this.onChange(e)}
            >
              Rock
        </button>
            <button
              type="button"
              name="paper"
              id="paper"
              className="guessButton"
              value="paper"
              onClick={e => this.onChange(e)}
            >
              Paper
        </button>
            <button
              type="button"
              name="scissors"
              id="scissors"
              className="guessButton"
              value="scissors"
              onClick={e => this.onChange(e)}
            >
              Scissors
        </button>
            <button
              type="button"
              name="lizard"
              id="lizard"
              className="guessButton"
              value="lizard"
              onClick={e => this.onChange(e)}
            >
              Lizard
        </button>
            <button
              type="button"
              name="spock"
              id="spock"
              className="guessButton"
              value="spock"
              onClick={e => this.onChange(e)}
            >
              Spock
        </button>

            <button type="submit" name="submit" id="submit" >
              Submit Guess
          </button>
          </form >}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state: state
})

// export default GuessSection
export default connect(mapStateToProps)(GuessSection)