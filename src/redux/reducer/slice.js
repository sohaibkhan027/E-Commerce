// reducers/slice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Initial state here
};

const sliceName = createSlice({
  name: 'sliceName',
  initialState,
  reducers: {
    // Define reducers here
  },
});

export const { actions } = sliceName;
export default sliceName.reducer;
