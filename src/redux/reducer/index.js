// reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import sliceReducer from './slice';

const rootReducer = combineReducers({
  slice: sliceReducer,
  // Add other reducers here
});

export default rootReducer;
