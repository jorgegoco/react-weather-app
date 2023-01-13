import { configureStore } from '@reduxjs/toolkit';
import coordReducer from './coordSlice';

const store = configureStore({
  reducer: {
    coord: coordReducer,
  },
});

export default store;
