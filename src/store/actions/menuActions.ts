import MenuItem from "../../types/MenuItem";

export const addMenu = (menu: MenuItem) => ({
  type: "addMenu",
  payload: menu,
});

export const removeMenu = (menu: MenuItem) => ({
  type: "removeMenu",
  payload: menu.id,
});
