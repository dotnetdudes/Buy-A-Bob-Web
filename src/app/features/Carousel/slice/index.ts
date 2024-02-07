import { CarouselState } from "./types";
import { carouselSaga } from "./saga";
import { useInjectReducer, useInjectSaga } from "app/utils/redux-injectors";
import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "app/utils/@reduxjs/toolkit";

export const initialState: CarouselState = {};

const slice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions: carouselActions } = slice;

export const useCarouselSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: carouselSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useCarouselSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
