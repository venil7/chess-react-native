import { ConnectedRouter, routerMiddleware, routerReducer } from "react-router-redux";
import { applyMiddleware, createStore, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import gameReducer from "./reducers/gameReducer";
import appReducer from "./reducers/appReducer";

const loggerMiddleware = createLogger();

const reducer = combineReducers({
  app: appReducer,
  game: gameReducer,
  router: routerReducer,
});

export const newStore = (history) => {
  const routeMiddleware = routerMiddleware(history);
  return createStore(reducer, applyMiddleware(thunk, loggerMiddleware, routeMiddleware));
}
