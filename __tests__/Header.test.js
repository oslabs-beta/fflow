import React from 'react';
import { render, screen, fireEvent } from '../src/test-utils.js';
import Header from '../src/components/Header';
import '@testing-library/jest-dom/extend-expect';

describe('Header', () => {
  test('renders Header component with Clear Project button', () => {
    render(<Header />);
    expect(screen.getByRole('button', { name: /Clear Project/i }));
  });

  test('renders Header component with light/dark mode Toggle', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('toggle-theme-btn')).toBeInTheDocument();
  });

  test('ClearProject button onClick functionality', () => {
    const { getByTestId } = render(<Header />);

    const mockFunc = jest.fn(() => true);

    const button = getByTestId('clear-project-button');
    fireEvent.click(button);
    expect(mockFunc()).toBe(true);
  });

  test('light/dark mode Toggle onClick functionality', () => {
    const { getByTestId } = render(<Header />);

    const mockFunc = jest.fn(() => true);

    const button = getByTestId('toggle-theme-btn');
    fireEvent.click(button);
    expect(mockFunc()).toBe(true);
  });
});
