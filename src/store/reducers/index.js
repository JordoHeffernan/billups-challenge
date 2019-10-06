import update from "immutability-helper";
import { rockPaperScissors, winOrLose } from "../../utils/index"

import {
  RESTART_GAME,
  TOGGLE_HELP,
  GET_GUESS_REQUEST,
  GET_GUESS_SUCCESS,
  GET_GUESS_FAILURE,
  HANDLE_INPUT,
  SET_BEST_OF,
} from '../actions/'

const INITIAL_STATE = {
  bestOf: 1,
  timesWrong: 0,
  timesRight: 0,
  humanGuess: "",
  computerGuess: "",
  lastGuessResult: "",
  winStatus: "Make a guess",
  helpOpen: false,
  error: null,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HANDLE_INPUT:
      return update(state, {
        humanGuess: { $set: action.payload }
      });
    case SET_BEST_OF:
      return update(state, {
        bestOf: { $set: action.payload }
      });
    case TOGGLE_HELP:
      return update(state, {
        helpOpen: { $set: !state.helpOpen }
      });
    case GET_GUESS_REQUEST:
      return update(state, {
        loading: { $set: true }
      });
    case GET_GUESS_SUCCESS:
      let { result, computer } = action.payload
      if (result === "win") {
        return update(state, {
          loading: { $set: false },
          timesRight: { $set: state.timesRight += 1 },
          computerGuess: { $set: computer },
          lastGuessResult: { $set: "were right" },
          winStatus: { $set: winOrLose(state.timesRight, state.timesWrong, state.bestOf) }
        })
      }
      if (result === "lose") {
        return update(state, {
          loading: { $set: false },
          timesWrong: { $set: state.timesWrong += 1 },
          computerGuess: { $set: computer },
          lastGuessResult: { $set: "were wrong" },
          winStatus: { $set: winOrLose(state.timesRight, state.timesWrong, state.bestOf) }
        })
      } else {
        return update(state, {
          loading: { $set: false },
          computerGuess: { $set: computer },
          lastGuessResult: { $set: "tied" },
        })
      }
    case GET_GUESS_FAILURE:
      console.log(action.error)
      return update(state, {
        loading: { $set: false },
        error: { $set: action.error || "There was an issue retrieving the computer's guess" }
      });

    case RESTART_GAME:
      return update(state, {
        bestOf: { $set: 1 },
        timesWrong: { $set: 0 },
        timesRight: { $set: 0 },
        humanGuess: { $set: "" },
        computerGuess: { $set: "" },
        lastGuessResult: { $set: "" },
        winStatus: { $set: "Make a guess" },
        helpOpen: { $set: false },
        error: { $set: null },
        loading: { $set: false },
      })

    default:
      return state;
  }
}