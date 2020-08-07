const defaultState = [];

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_NEW_POKEMON":
      return [...state, action.payload.pokemon];

    case "RESET_POKEMON":
      return defaultState;

    default:
      return state;
  }
};

export default reducer;
