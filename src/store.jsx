import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],

  reducers: {
    addCount(state, action) {
      const result = state.find((item, i) => {
        return item.id === action.payload;
      });

      result.count++;
    },
    addItem(state, action) {
      state.push({ id: action.payload.id, name: action.payload.title, count: 0 });
      alert('추가되었습니다.')
    },
  },
});

export let { addCount, addItem } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
