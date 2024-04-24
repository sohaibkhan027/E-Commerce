// authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  token: null,
  user: null,
  error: null,
  userName: '',
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
    },
    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      state.error = null;
    },
    setUserName: (state, action) => {
        state.userName = action.payload;
      },
  },
});

export const { loginSuccess, loginFailure, logout,setUserName } = authSlice.actions;

export default authSlice.reducer;
