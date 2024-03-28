// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../store/store'; // Import your root reducer
import selectedProductSlice from '../reducer/selectedProduct-slice';
import CartSlice from '../reducer/CartSlice';

const store = configureStore({
  reducer: {
    selectedProduct:selectedProductSlice,
    cart:CartSlice
  },
  // Additional middleware setup if needed
});

export default store;
