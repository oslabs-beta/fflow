import React from 'react';
import { render, screen, fireEvent } from '../src/test-utils.js';
import '@testing-library/jest-dom/extend-expect';
// import DnD from '../src/components/DnD';
import CompCreator from '../src/components/CompCreator';
import Tree from '../src/components/Tree';
// import TreeRecursive from '../src/components/TreeRecursive';
import TreeFile from '../src/components/TreeFile';

describe('Left Panel', () => {
  test('renders CompCreator component with input field and add button', () => {
    const { getByTestId } = render(<CompCreator />);
    expect(screen.getByText('React Component')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    const addButton = getByTestId('add-button');
    expect(addButton).toBeInTheDocument();
    // const mockFunction = jest.fn(() => true);
    // fireEvent.click(addButton);
    // expect(mockFunction()).toBe(true);
  });

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

  // test('renders the tree folders with on click functionality', () => {
  //   const { getByTestId } = render(<TreeRecursive />);
  //   expect(getByTestId('folder')).toBeInTheDocument();
  // });

  // test('renders the tree files with on click functionality', () => {
  //   const { getByTestId } = render(<TreeFile />);
  //   expect(getByTestId('file')).toBeInTheDocument();
  // });

  //HAVING ISSUES WITH TESTS INVOLVING DND DUE TO PROVIDER/STORE ISSUE WITH REACT TESTING LIBRARY

  // test('renders fflow logo with on click functionality', () => {
  //   const { getByTestId } = render(<DnD />);
  //   const appLogo = getByTestId('app-logo');
  //   expect(appLogo).toBeInTheDocument();
  //   const mockFunction = jest.fn(() => true);
  //   fireEvent.click(appLogo);
  //   expect(mockFunction()).toBe(true);
  // });

  // test('renders tree component', () => {
  //   render(<DnD />);
  //   expect(screen.getByText('FOLDERS')).toBeInTheDocument();
  // });
});
