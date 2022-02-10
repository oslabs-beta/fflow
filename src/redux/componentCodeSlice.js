import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  componentCode: [],
};

export const componentCodeSlice = createSlice({
  name: 'componentCodePreview',
  initialState,
  reducers: {
    addComponentCode: (state) => {},
  },
});

export const { addComponentCode } = componentCodeSlice.actions;

export default componentCodeSlice.reducer;
