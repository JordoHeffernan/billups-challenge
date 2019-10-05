

export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = () => ({
  type: RESTART_GAME
});

export const TOGGLE_HELP = 'TOGGLE_HELP';
export const toggleHelp = () => ({
  type: TOGGLE_HELP
});

export const HANDLE_INPUT = 'HANDLE_INPUT';
export const handleInput = ({ target: { value } }) => ({
  type: HANDLE_INPUT,
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

export const getGuess = () => dispatch => {
  dispatch(getGuessRequest());
  return fetch('https://codechallenge.boohma.com/choice')
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(guess => {
      return dispatch(getGuessSuccess(guess));
    })
    .catch(err => {
      return dispatch(getGuessFailure(err));
    });
};