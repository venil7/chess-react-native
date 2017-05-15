import { applyMiddleware, createStore, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import gameReducer from "./reducers/gameReducer";
import appReducer from "./reducers/appReducer";

const loggerMiddleware = createLogger();

const reducer = combineReducers({
  game: gameReducer,
  app: appReducer
});

export const newStore = () =>
  createStore(reducer, applyMiddleware(thunk, loggerMiddleware));
