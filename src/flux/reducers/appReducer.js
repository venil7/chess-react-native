import { MAIN, MENU, ABOUT } from "../actions/";

const initState = () => {
  return {
    menu: MENU
  };
};

const appReducer = (state = initState(), action) => {
  switch (action.type) {
    case "SELECT_MAIN_MENU": {
      return {
        ...state,
        menu: action.menu
      };
    }

    default:
      return state;
  }
};

export default appReducer;
