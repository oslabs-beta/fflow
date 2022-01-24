import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  components: [],
};

export const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    addComponent: (state, action) => {
      console.log('addComponent fired');
      state.components.push(action.payload);
    },
    deleteComponent: (state, action) => {
      
    },
    reorderComponent: (state, action) => {
      console.log('reorderComponent fired');
      state.components = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { addComponent, reorderComponent } = canvasSlice.actions;

export default canvasSlice.reducer;
