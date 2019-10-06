

export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = () => ({
  type: RESTART_GAME
});

export const TOGGLE_HELP = 'TOGGLE_HELP';
export const toggleHelp = () => ({
  type: TOGGLE_HELP
});

export const HANDLE_INPUT = 'HANDLE_INPUT';
export const handleInput = value => ({
  type: HANDLE_INPUT,
  payload: value
});

export const SET_BEST_OF = 'SET_BEST_OF';
export const setBestOf = value => ({
  type: SET_BEST_OF,
  payload: value
});

export const GET_GUESS_REQUEST = 'GET_GUESS_REQUEST';
export const getGuessRequest = () => ({
  type: GET_GUESS_REQUEST
});
export const GET_GUESS_SUCCESS = 'GET_GUESS_SUCCESS';
export const getGuessSuccess = guess => ({
  type: GET_GUESS_SUCCESS,
  payload: guess
});
export const GET_GUESS_FAILURE = 'GET_GUESS_FAILURE';
export const getGuessFailure = error => ({
  type: GET_GUESS_FAILURE,
  error
});

export const getGuess = playerChoice => dispatch => {
  dispatch(getGuessRequest());
  let body = { player: playerChoice };
  return fetch('http://localhost:8080/play', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(response => {
      return dispatch(getGuessSuccess(response));
    })
    .catch(err => {
      return dispatch(getGuessFailure(err));
    });
};