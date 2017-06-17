import simpleStore from "react-native-simple-store";

const key = "chess-state";
export const saveState = store => next => action => {
  const result = next(action);
  simpleStore.save(key, store.getState());
  return result;
};
