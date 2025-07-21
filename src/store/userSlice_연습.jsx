import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: 'user',
  initialState: {name: 'kim', age: 20},

  reducers:{
    changeName(state, action){
      state.name = 'sim'
    },
    increaseAge(state, action){
      state.age += action.payload
    }
  }
})

export default user;