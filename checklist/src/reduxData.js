import { configureStore, createSlice } from '@reduxjs/toolkit';

let remainingQuantity = createSlice({
  name: 'remainingQuantity',
  initialState: 0,
  reducers: {
    plusCount(state) {
      return state + 1;
    },
    minusCount(state) {
      return state - 1;
    }
  }
})

export default configureStore({
  reducer: {
    remainingQuantity: remainingQuantity.reducer
  }
})
export let { plusCount, minusCount } = remainingQuantity.actions