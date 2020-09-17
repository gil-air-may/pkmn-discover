export const ADD_NEW_POKEMON = "ADD_NEW_POKEMON";
export const RESET_POKEMON = "RESET_POKEMON";

type PokemonShape = { id: number; name: string };

export interface AddNewPokemon {
  type: typeof ADD_NEW_POKEMON;
  payload: { pokemon: PokemonShape };
}

export interface ResetPokemon {
  type: typeof RESET_POKEMON;
}

export type PokemonAction = AddNewPokemon | ResetPokemon;

const defaultState: PokemonShape[] = [];

export const pokemonReducer = (state = defaultState, action: PokemonAction) => {
  switch (action.type) {
    case "ADD_NEW_POKEMON":
      return [...state, action.payload.pokemon];

    case "RESET_POKEMON":
      return defaultState;

    default:
      return state;
  }
};
