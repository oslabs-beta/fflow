import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currTheme: 'vs-dark',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      console.log('changeTheme fired');
      console.log('state:', state.currTheme);
      state.currTheme = (state.currTheme === 'vs-dark') ? 'vs-light' : 'vs-dark';
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
