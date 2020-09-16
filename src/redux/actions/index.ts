import { selectRandomGen1 } from "../../api";
import { DispatchType } from "../store";
import { setHighScore } from "./helper";

export const increaseCorrectScore = () => ({ type: "INCREASE_CORRECT_SCORE" });
export const increaseWrongScore = () => ({ type: "INCREASE_WRONG_SCORE" });

export const addNewPokemon = () => (dispatch: DispatchType) => {
  selectRandomGen1().then((res) => {
    dispatch({ type: "ADD_NEW_POKEMON", payload: { pokemon: res.data } });
  });
};

export const resetGame = () => (dispatch: DispatchType) => {
  dispatch({ type: "RESET_PLAYER" });
  dispatch({ type: "RESET_POKEMONS" });
  dispatch(addNewPokemon());
};

export const submitName = (name) => (dispatch, getState) => {
  const {
    player: { correctScore },
    pokemons: { length, [length - 1]: currentPokemon },
  } = getState();

  if (currentPokemon.name === name.toLowerCase()) {
    setHighScore(correctScore + 1);
    dispatch(increaseCorrectScore());
  } else {
    dispatch(increaseWrongScore());
  }

  dispatch(addNewPokemon());
};
