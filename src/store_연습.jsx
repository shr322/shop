import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice_연습'

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
    { id: 1, name: "Red Knit", count: 1 },
  ],
  reducers : {
    addCount(state, action){
      let result = state.find((item,i)=>{
        return item.id === action.payload
      })

      result.count++
    },
    addItem(state, action){
      // let a = state.map((item)=>{
      //   return item.id != action.payload.id ? state.push({id: action.payload.id, name: action.payload.title, count: action.payload.count}) : alert('있는 파일임')
      // })

      let a = state.find((item)=>{
        return item.id == action.payload.id
      })
      
      function itemPush(){
        state.push({id: action.payload.id, name: action.payload.title, count: 0});
        alert('카트에 추가됨');
      }

      function itemAddAlert(){
        a.count++;
        alert('수량이 증가했습니다.');
      }
      
      !a ? itemPush() : itemAddAlert()
    },
    removeItem(state, action){

      let a = state.findIndex((item)=>{
        return item.id == action.payload
      })

      state.splice(a, 1)

    }
  }
})

export let { addCount, addItem, removeItem } = cart.actions
export let { changeName, increaseAge } = user.actions

export default configureStore({
  reducer: { 
    cart: cart.reducer,
    user: user.reducer,
  }
}) 