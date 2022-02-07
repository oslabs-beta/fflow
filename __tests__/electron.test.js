import React from 'react';
import { render, screen } from '@testing-library/react';
import Navigation from '../src/components/Navigation';
import Header from '../src/components/Header';

describe('App renders', () => {
  let app;

  beforeAll(() => {
    app = render(<Header />);
  })

  it('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });
  
  it(' renders', () => {
    expect(screen.getByText('Clear Project')).toBeInTheDocument();
  })

});
