export const ADD_NEW_POKEMON = "ADD_NEW_POKEMON";
export const RESET_POKEMON = "RESET_POKEMON";

export interface Pokemon {
  id: number;
  name: string;
  sprites: { front_default: string };
}

interface AddNewPokemon {
  type: typeof ADD_NEW_POKEMON;
  payload: { pokemon: Pokemon };
}

interface ResetPokemon {
  type: typeof RESET_POKEMON;
}

export const addNewPokemonAction = (pokemon: Pokemon): AddNewPokemon => {
  return {
    type: ADD_NEW_POKEMON,
    payload: { pokemon },
  };
};

export const resetPokemonAction = (): ResetPokemon => {
  return {
    type: RESET_POKEMON,
  };
};

export type PokemonAction = AddNewPokemon | ResetPokemon;
