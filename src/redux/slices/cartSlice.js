import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    minusProduct(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
      if (findItem.count == 0) {
        state.items = state.items.filter((obj) => obj.id !== action.payload);
      }
    },
    remuveProduct(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearProduct(state, action) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  addProduct,
  minusProduct,
  remuveProduct,
  clearProduct,
} = cartSlice.actions;

export default cartSlice.reducer;
