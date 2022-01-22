import { configureStore } from '@reduxjs/toolkit';
import canvasReducer from './canvasSlice';
import tagReducer from './tagsSlice';


export const store = configureStore({
  reducer: {
    canvas: canvasReducer,
    tags: tagReducer
  },
})
