import React from 'react';
import { render, screen, fireEvent } from '../src/test-utils.js';
import '@testing-library/jest-dom/extend-expect';
import CompCreator from '../src/components/CompCreator';
import Tree from '../src/components/Tree';

describe('Left Panel', () => {
  test('renders CompCreator component with input field and button', () => {
    render(<CompCreator />);
    const inputNode = screen.getByPlaceholderText('Component Name');
    const compButton = screen.getByRole('button', {
      name: /add/i,
    });
    expect(inputNode).toBeInTheDocument();
    expect(compButton).toBeInTheDocument();
  });

  test('value of comp creator input field changes', () => {
    const { queryByPlaceholderText } = render(<CompCreator />);
    const userInput = queryByPlaceholderText('Component Name');
    fireEvent.change(userInput, { target: { value: 'test' } });
    expect(userInput.value).toBe('test');
  });

  test('renders tree component with mini file tree', () => {
    const { getByTestId } = render(<Tree />);
    expect(getByTestId('filetree')).toBeInTheDocument();
  });
});

