import {
  ConnectedRouter,
  routerMiddleware,
  routerReducer
} from "react-router-redux";
import { applyMiddleware, createStore, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { saveState } from "./middleware/saveState";
import gameReducer from "./reducers/gameReducer";
import appReducer from "./reducers/appReducer";

const loggerMiddleware = createLogger();

const reducer = combineReducers({
  app: appReducer,
  game: gameReducer,
  router: routerReducer
});

export const newStore = history => {
  const routeMiddleware = routerMiddleware(history);
  const enhancer = applyMiddleware(
    thunk,
    loggerMiddleware,
    routeMiddleware,
    saveState
  );
  const preloadedState = {};
  return createStore(reducer, preloadedState, enhancer);
};
