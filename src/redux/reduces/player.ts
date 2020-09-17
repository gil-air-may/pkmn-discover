import { getHighScore } from "../actions/helper";
const defaultState = {
  correctScore: 0,
  wrongScore: 0,
  highScore: getHighScore(),
};

export const INCREASE_CORRECT_SCORE = "INCREASE_CORRECT_SCORE";
export const INCREASE_WRONG_SCORE = "INCREASE_WRONG_SCORE";
export const RESET_PLAYER = "RESET_PLAYER";

export interface IncreaseCorrectScore {
  type: typeof INCREASE_CORRECT_SCORE;
}

export interface IncreaseWrongScore {
  type: typeof INCREASE_WRONG_SCORE;
}

export interface ResetPlayer {
  type: typeof RESET_PLAYER;
}

export type PlayerAction =
  | ResetPlayer
  | IncreaseCorrectScore
  | IncreaseWrongScore;

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
