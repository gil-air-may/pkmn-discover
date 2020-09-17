import { getHighScore } from "../actions/helper";
import { PlayerAction } from "../actions/player";
const defaultState = {
  correctScore: 0,
  wrongScore: 0,
  highScore: getHighScore(),
};

const reducer = (state = defaultState, action: PlayerAction) => {
  switch (action.type) {
    case "INCREASE_CORRECT_SCORE":
      const newScore = state.correctScore + 1;
      return {
        ...state,
        correctScore: newScore,
        highScore: newScore > state.highScore ? newScore : state.highScore,
      };

    case "INCREASE_WRONG_SCORE":
      return { ...state, wrongScore: state.wrongScore + 1 };

    case "RESET_PLAYER":
      return { ...defaultState, highScore: state.highScore };

    default:
      return state;
  }
};

export default reducer;
