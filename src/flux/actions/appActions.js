export const [MENU, MAIN, ABOUT] = [1, 2, 3];

export const selectMainMenu = (menu) => {
  return { type: 'SELECT_MAIN_MENU', menu };
};