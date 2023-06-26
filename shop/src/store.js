import { combineReducers, configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name: 'user',
  initialState: 'kim',
  reducers: {
    changeName(state) {
      return 'john' + state
    }
  }
})

let cart = createSlice({
  name: 'cart',
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers: {
    plusCount(state, action) {
      let index = state.findIndex((a)=>{return a.id == action.payload});
      state[index].count++
    },
    minusCount(state, action) {
      let index = state.findIndex((a) => { return a.id == action.payload });
      state[index].count--
    },
    addCart(state, action) {
      let isDup = state.find((a) => { return a.id == action.payload.id });
      isDup ? alert('이미 담긴 상품입니다!!') : state.push(action.payload);
    },
    removeCart(state, action) {
      let index = state.findIndex((a) => { return a.id == action.payload });
      state.splice(index, 1);
    }
  }
})

let rootReducer = combineReducers({
  user: user.reducer,
  cart: cart.reducer
});

export default configureStore({
  reducer: rootReducer
});

export let { changeName } = user.actions
export let { plusCount, minusCount, addCart, removeCart } = cart.actions