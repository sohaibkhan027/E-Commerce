// authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  token: null,
  user: '',
  error: null,
  loading: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.error = null;
      state.loading = false;
    },
    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.token = null;
      // state.user = null;
      state.error = action.payload;
      state.loading = false;

    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = '';
      state.error = null;
    },

  },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
