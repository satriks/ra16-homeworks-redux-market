import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { CardType } from "../models/models";

interface CardSlice {
  cards: CardType[];
}

const cards: CardSlice = {
  cards: [],
};

const CardsSlice = createSlice({
  name: "cards",
  initialState: cards,
  reducers: {
    addCard(state, action) {
      state.cards.push({
        id: v4(),
        title: action.payload.title,
        price: action.payload.price,
        oldPrice: action.payload.oldPrice,
        picture: action.payload.picture,
      });
    },
  },
});

export const { addCard } = CardsSlice.actions;

export default CardsSlice.reducer;
