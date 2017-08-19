import simpleStore from 'react-native-simple-store';
import { Board } from 'chess-js';
import { initState } from '../reducers/gameReducer';
import { STORAGE_KEY } from '../store';

export const saveState = store => next => action => {
  const { type } = action;
  if (!type.startsWith('@@router')) {
    const state = store.getState();
    state.game.json = state.game.board.toJSON();
    simpleStore.save(STORAGE_KEY, state);
  }
  return next(action);
};

export const restoreState = async () => {
  try {
    const state = await simpleStore.get(STORAGE_KEY);
    state.game.board = Board.fromJSON(state.game.json);
    const { json, ...rest } = state;
    return rest;
  } catch (e) {
    return { game: initState() };
  }
};
