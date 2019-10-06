import update from "immutability-helper";
import { rockPaperScissors, computerGuessToWords } from "../../utils/index"

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
  helpOpen: false,
  error: null,
  loading: false
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case HANDLE_INPUT:
      console.log(action.payload)
      return update(state, {
        humanGuess: { $set: action.payload }
      });
    case SET_BEST_OF:
      console.log(action.payload)
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
      let computerWord = action.payload.name;
      console.log(action)
      let result = rockPaperScissors(state.humanGuess, computerWord);
      console.log("computer word :", computerWord, "result :", result)
      if (result === 1) {
        return update(state, {
          loading: { $set: false },
          timesRight: { $set: state.timesRight += 1 },
          computerGuess: { $set: computerWord },
          lastGuessResult: { $set: "were right" },
        })
      }
      if (result === -1) {
        return update(state, {
          loading: { $set: false },
          timesWrong: { $set: state.timesWrong += 1 },
          computerGuess: { $set: computerWord },
          lastGuessResult: { $set: "were wrong" },
        })
      } else {
        return update(state, {
          loading: { $set: false },
          computerGuess: { $set: computerWord },
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
        helpOpen: { $set: false },
        error: { $set: null },
        loading: { $set: false },
      })

    default:
      return state;
  }
}