import { configureStore, createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils';
import user from './store/userSlice';





let stock = createSlice({
    name : 'stock',
    initialState : [10,11,12]
});

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1},
        {id : 1, name : 'Red Knit', count : 1},
      ],
    reducers : {
      addCount(state, action){
        let num = state.findIndex((a)=>{return a.id==action.payload })
        state[num].count++
      },
      addItem(state, action){
        state.push(action.payload)
        state.push({id : 1, name : 'Red Knit', count : 1})
      }
    } 
});

export let {addCount, addItem} = cart.actions


export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer,
  }
}) 

