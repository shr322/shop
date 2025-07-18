import { createSlice } from "@reduxjs/toolkit";


let user = createSlice({
  name: "user",
  initialState: { name: "Kim", age: 20 },
  reducers: {
    changeName(state) {
      state.name = 'Park';
    },
    increase(state, action){
      state.age += action.payload;
    }
  },
});

export let { changeName, increase } = user.actions;

export default user;