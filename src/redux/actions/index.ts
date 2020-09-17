import { ThunkAction } from "redux-thunk";

import { selectRandomGen1 } from "../../api";
import { PlayerAction } from "../reduces/player";
import { PokemonAction } from "../reduces/pokemons";
import { RootStoreType } from "../store";
import { setHighScore } from "./helper";

export const increaseCorrectScore = (): PlayerAction => ({
  type: "INCREASE_CORRECT_SCORE",
});
export const increaseWrongScore = (): PlayerAction => ({
  type: "INCREASE_WRONG_SCORE",
});

type RootAction = PokemonAction | PlayerAction;

export const addNewPokemon = (): ThunkAction<
  void,
  RootStoreType,
  unknown,
  PokemonAction
> => (dispatch) => {
  selectRandomGen1().then((res) => {
    dispatch({ type: "ADD_NEW_POKEMON", payload: { pokemon: res.data } });
  });
};

export const resetGame = (): ThunkAction<
  void,
  RootStoreType,
  unknown,
  RootAction
> => (dispatch) => {
  dispatch({ type: "RESET_PLAYER" });
  dispatch({ type: "RESET_POKEMON" });
  dispatch(addNewPokemon());
};

export const submitName = (
  name: string
): ThunkAction<void, RootStoreType, unknown, PlayerAction> => (
  dispatch,
  getState
) => {
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
