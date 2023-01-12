import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coords: [43.467588, -3.812048],
};

const coordSlice = createSlice({
  name: 'coord',
  initialState,
  reducers: {
    input: (state, action) => {
      const temp = state;
      temp.coords = action.payload;
    },
  },
});

export default coordSlice.reducer;
export const { input } = coordSlice.actions;
