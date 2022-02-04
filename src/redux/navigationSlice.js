import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toggle: 'DnD',
};

export const navigationSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    toggleLeftPanel: (state, action) => {
      state.toggle = action.payload;
    },
  },
});

export const { toggleLeftPanel } = navigationSlice.actions;

export default navigationSlice.reducer;
