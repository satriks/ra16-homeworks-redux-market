import { configureStore } from "@reduxjs/toolkit";
import CardsSlice from "./CardsSlice";

const store = configureStore({
  reducer: { cards: CardsSlice },
});

export default store;
