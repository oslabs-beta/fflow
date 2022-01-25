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
      if (confirm(`Delete this component?\n${action.payload.name + ' in position ' + action.payload.index}`)) {
        state.components.splice(action.payload.index, 1);
      }
    },
    reorderComponent: (state, action) => {
      console.log('reorderComponent fired');
      const [item] = state.components.splice(action.payload.source.index, 1);
      state.components.splice(action.payload.destination.index, 0, item);
    },
    clearComponents: (state) => {
      console.log('clearComponents fired');
      state.components = [];
    },
    combineComponents: (state, action) => {
      console.log('combineComponents fired');
      const [item] = state.components.splice(action.payload.source.index, 1);
      const index = action.payload.combine.draggableId.split('-')[0];
      console.log('index is: ', index);
      console.log('ele is: ', state.components[index]);
      if(Array.isArray(state.components[index])){
        state.components[index].push(item);
      }else{
        state.components.splice(index, 1, [state.components[index], item]);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addComponent, deleteComponent, reorderComponent, clearComponents, combineComponents } = canvasSlice.actions;

export default canvasSlice.reducer;
