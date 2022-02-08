import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  componentCode: [],
};

export const componentCodeSlice = createSlice({
  name: 'componentCodePreview',
  initialState,
  reducers: {
    addComponentCode: (state) => {
      console.log('addComponentCode fired');
    },
  },
});

// Action creators are generated for each case reducer function
export const { addComponentCode } = componentCodeSlice.actions;

export default componentCodeSlice.reducer;
