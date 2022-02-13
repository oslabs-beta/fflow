import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fileNames: [],
};

export const fileTreeSlice = createSlice({
  name: 'fileTree',
  initialState,
  reducers: {
    addFile: (state) => {},
  },
});

export const { addFile } = fileTreeSlice.actions;

export default fileTreeSlice.reducer;
