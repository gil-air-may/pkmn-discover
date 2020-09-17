export const INCREASE_CORRECT_SCORE = "INCREASE_CORRECT_SCORE";
export const INCREASE_WRONG_SCORE = "INCREASE_WRONG_SCORE";
export const RESET_PLAYER = "RESET_PLAYER";

interface ResetPlayer {
  type: typeof RESET_PLAYER;
}

interface IncreaseCorrectScore {
  type: typeof INCREASE_CORRECT_SCORE;
}

interface IncreaseWrongScore {
  type: typeof INCREASE_WRONG_SCORE;
}

export const increaseCorrectScoreAction = (): IncreaseCorrectScore => ({
  type: INCREASE_CORRECT_SCORE,
});

export const increaseWrongScoreAction = (): IncreaseWrongScore => ({
  type: INCREASE_WRONG_SCORE,
});

export const resetPlayerAction = (): ResetPlayer => ({
  type: RESET_PLAYER,
});

export type PlayerAction =
  | ResetPlayer
  | IncreaseWrongScore
  | IncreaseCorrectScore;
