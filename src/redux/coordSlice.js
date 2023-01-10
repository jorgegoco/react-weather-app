import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lat: 43.467588,
  lon: -3.812048,
};

const coordSlice = createSlice({
  name: 'coord',
  initialState,
  reducers: {
    input: (state, action) => {
      const { a, b } = action.payload;
      return {
        ...state,
        a,
        b,
      };
    },
  },
});

export default coordSlice.reducer;
export const { input } = coordSlice.actions;
