type PokemonShape = { id: number };

enum ActionType {
  ADD_NEW_POKEMON,
  RESET_POKEMON,
}

const defaultState: PokemonShape[] = [];

interface PokemonActionShape {
  type: keyof typeof ActionType;
  payload: { pokemon: PokemonShape };
}

export const pokemonReducer = (
  state = defaultState,
  action: PokemonActionShape
) => {
  switch (action.type) {
    case "ADD_NEW_POKEMON":
      return [...state, action.payload.pokemon];

    case "RESET_POKEMON":
      return defaultState;

    default:
      return state;
  }
};
