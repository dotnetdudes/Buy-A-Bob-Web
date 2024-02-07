import { initialState } from ".";
import { RootState } from "types";
import { createSelector } from "@reduxjs/toolkit";

const selectSlice = (state: RootState) => state.carousel || initialState;

export const selectCarousel = createSelector([selectSlice], (state) => state);
