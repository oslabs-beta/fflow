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
      state.components.splice(action.payload.destination.index, 0, action.payload.draggableId);
    },
    deleteComponent: (state, action) => {
      console.log('deleteComponent fired');
      if (confirm(`Delete this component?\n${action.payload.name + ' in position ' + action.payload.index}`)){
        state.components.splice(action.payload, 1);
      } 
    },
    reorderComponent: (state, action) => {
      console.log('reorderComponent fired');
      const item = state.components.splice(action.payload.source.index, 1);
      state.components.splice(action.payload.destination.index, 0, item);
    },
    clearComponents: (state) => {
      console.log('clearComponents fired');
      state.components = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addComponent, deleteComponent, reorderComponent, clearComponents } = canvasSlice.actions;

export default canvasSlice.reducer;
