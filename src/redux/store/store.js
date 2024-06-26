// store.js
import { configureStore } from '@reduxjs/toolkit';
import selectedProductSlice from '../reducer/selectedProduct-slice';
import CartSlice from '../reducer/CartSlice';
import regSlice  from "../reducer/RegistrationSlice"
import authSlice from '../reducer/authSlice';

const store = configureStore({
  reducer: {
    selectedProduct:selectedProductSlice,
    cart:CartSlice,
    user:regSlice,
    auth: authSlice,
  },
  // Additional middleware setup if needed
});

export default store;
