import React from 'react';
import { configure, render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import canvasReducer from './redux/canvasSlice';
import tagReducer from './redux/tagsSlice';
import themeReducer from './redux/themeSlice';
import fileTreeReducer from './redux/fileTreeSlice';
import navigationReducer from './redux/navigationSlice';

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: { canvas: canvasReducer, tags: tagReducer, theme: themeReducer, fileTree: fileTreeReducer, nav: navigationReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
