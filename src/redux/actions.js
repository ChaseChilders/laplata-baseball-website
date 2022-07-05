export const ADD = "favorites/ADD_PLAYER";

export const addPlayer = (player) => {
  return {
    type: ADD,
    player,
  };
};
