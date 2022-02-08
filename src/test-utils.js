import React from 'react';
import { configure, render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import canvasReducer from './redux/canvasSlice';

function render(ui, { preloadedState, store = configureStore({ reducer: { canvas: canvasReducer }, preloadedState }), ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
