import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { playersReducer } from "./reducer";

const localCache = (store) => (next) => (action) => {
  const state = store.getState();
  localStorage.setItem("laplata-baseball-website", JSON.stringify(state));
  next(action);
};

const rootReducer = combineReducers({
  add: playersReducer,
});

const defaultState = {
  add: undefined,
};
export const store = createStore(
  rootReducer,
  JSON.parse(localStorage.getItem("laplata-baseball-website")) || defaultState,
  composeWithDevTools(applyMiddleware(thunk, localCache))
);
