import { ADD } from "./actions";

const defaultState = {
  favoritePlayers: [],
};

export const playersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        favoritePlayers: [...state.favoritePlayers, action.player],
      };
    default:
      return state;
  }
};
