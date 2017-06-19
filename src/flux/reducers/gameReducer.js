import { Board } from "chess-js";

const initState = () => {
  return {
    board: Board.newGame(),
    selectedField: null,
    possibleMoves: [],
    thinking: false,
    alphaBetta: false,
    difficulty: 3
  };
};

const gameReducer = (state = initState(), action) => {
  switch (action.type) {
    case "NEW_GAME": {
      return initState();
    }
    case "MOVE_PIECE": {
      const move = action.move;
      const board = state.board.makeMove(move);
      return {
        ...state,
        board,
        selectedField: null,
        possibleMoves: []
      };
    }
    case "CPU_TIME_ON": {
      return {
        ...state,
        thinking: true
      };
    }
    case "REPLACE_BOARD": {
      return {
        board: action.board,
        selectedField: null,
        possibleMoves: [],
        thinking: false
      };
    }
    case "SELECT_FIELD": {
      const field = action.field;
      return {
        ...state,
        selectedField: field.isEmpty ? null : field,
        possibleMoves: field.isEmpty ? [] : field.possibleMoves(state.board)
      };
    }
    case "SET_ALPHABETTA": {
      const { alphaBetta } = action;
      return { ...state, alphaBetta };
    }
    case "SET_DIFFICULTY": {
      const { difficulty } = action;
      return { ...state, difficulty };
    }
    default:
      return state;
  }
};

export default gameReducer;
