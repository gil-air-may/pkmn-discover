import { ThunkAction } from "redux-thunk";

import { selectRandomGen1 } from "../../api";
import {
  PlayerAction,
  resetPlayerAction,
  increaseCorrectScoreAction,
  increaseWrongScoreAction,
} from "../actions/player";
import {
  PokemonAction,
  addNewPokemonAction,
  resetPokemonAction,
} from "../actions/pokemons";
import { RootStoreType } from "../store";
import { setHighScore } from "./helper";

type RootAction = PokemonAction | PlayerAction;

export const addNewPokemon = (): ThunkAction<
  void,
  RootStoreType,
  unknown,
  PokemonAction
> => (dispatch) => {
  selectRandomGen1().then((res) => {
    dispatch(addNewPokemonAction(res.data));
  });
};

export const resetGame = (): ThunkAction<
  void,
  RootStoreType,
  unknown,
  RootAction
> => (dispatch) => {
  dispatch(resetPlayerAction());
  dispatch(resetPokemonAction());
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
      dispatch(increaseCorrectScoreAction());
    } else {
      dispatch(increaseWrongScoreAction());
    }

    dispatch(addNewPokemon());
  };
