import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 5 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment
    increment(state) {
      state.value++;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },

    // decrement
    decrement(state) {
      state.value--;
    },

    // reset
  },
});

export const { increment, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;
