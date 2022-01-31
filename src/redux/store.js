import { configureStore } from '@reduxjs/toolkit';
import canvasReducer from './canvasSlice';
import tagReducer from './tagsSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    canvas: canvasReducer,
    tags: tagReducer,
    theme: themeReducer,
  },
});
