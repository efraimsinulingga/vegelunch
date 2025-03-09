import { configureStore } from "@reduxjs/toolkit";
import MenuItem from "../types/MenuItem";

const initialState: MenuItem[] = [];

const menuReservationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "addMenu":
      return [...state, action.payload];
    case "removeMenu":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    menuReservation: menuReservationReducer,
  },
});
