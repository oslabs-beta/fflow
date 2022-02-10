import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currTheme: 'vs-dark',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.currTheme = state.currTheme === 'vs-dark' ? 'vs-light' : 'vs-dark';
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
