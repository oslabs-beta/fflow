import React from 'react';
import { render, screen } from '../src/test-utils.js';
import Header from '../src/components/Header';

describe('Header', () => {
  test('renders Header component', () => {
    render(<Header />);
    expect(screen.getByRole('button', { name: /Clear Canvas/i }));
  });
});
