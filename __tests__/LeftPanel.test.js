import React from 'react';
import { render, screen, fireEvent } from '../src/test-utils.js';
import '@testing-library/jest-dom/extend-expect';
import CompCreator from '../src/components/CompCreator';
import Tree from '../src/components/Tree';

describe('Left Panel', () => {
  test('value of comp creator input field changes', () => {
    const { queryByPlaceholderText } = render(<CompCreator />);
    const input = queryByPlaceholderText('Component Name');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test'); 
  });

  test('renders the tree component which displays file tree', () => {
    const { getByTestId } = render(<Tree />);
    expect(getByTestId('filetree')).toBeInTheDocument();
  });
});
