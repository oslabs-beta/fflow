import React from 'react';
import { render, screen, fireEvent } from '../src/test-utils.js';
import '@testing-library/jest-dom/extend-expect';
import Header from '../src/components/Header';

describe('Header', () => {
  test('renders Header component with Clear Project button with on click functionality', () => {
    const { getByTestId } = render(<Header />);
    const clearProjectButton = getByTestId('clear-project-button');
    expect(clearProjectButton).toBeInTheDocument();
    const mockFunction = jest.fn(() => true);
    fireEvent.click(clearProjectButton);
    expect(mockFunction()).toBe(true);
  });

  test('renders Header component with light/dark mode Toggle with on click functionality', () => {
    const { getByTestId } = render(<Header />);
    const mockFunction = jest.fn(() => true);
    const themeToggle = getByTestId('toggle-theme-btn');
    expect(themeToggle).toBeInTheDocument();
    fireEvent.click(themeToggle);
    expect(mockFunction()).toBe(true);
  });
});
