// reducers/slice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    product:{}
  // Initial state here
};

const selectedProduct = createSlice({
  name: 'sliceName',
  initialState,
  reducers: {
    setSeletedProduct:(state, actions)=>{
        state.product=actions.payload
    }
    // Define reducers here
  },
});

export const {  setSeletedProduct } = selectedProduct.actions;
export default selectedProduct.reducer;
