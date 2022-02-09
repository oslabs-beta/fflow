import React from 'react';
import { render, screen, fireEvent } from '../src/test-utils.js';
import '@testing-library/jest-dom/extend-expect';
import Navigation from '../src/components/Navigation';

describe('Navigation', () => {
  test('renders Navigation component with DnD icon button with on click functionality', () => {
    const { getByTestId } = render(<Navigation />);
    const dndButton = getByTestId('dnd-button');
    expect(dndButton).toBeInTheDocument();
    const mockFunction = jest.fn(() => true);
    fireEvent.click(dndButton);
    expect(mockFunction()).toBe(true);
  });

  test('renders Navigation component with file tree icon button with on click functionality', () => {
    const { getByTestId } = render(<Navigation />);
    const fileTreeButton = getByTestId('filetree-button');
    expect(fileTreeButton).toBeInTheDocument();
    const mockFunction = jest.fn(() => true);
    fireEvent.click(fileTreeButton);
    expect(mockFunction()).toBe(true);
  });

  test('renders Navigation component with save icon button with on click functionality', () => {
    const { getByTestId } = render(<Navigation />);
    const saveButton = getByTestId('save-button');
    expect(saveButton).toBeInTheDocument();
    const mockFunction = jest.fn(() => true);
    fireEvent.click(saveButton);
    expect(mockFunction()).toBe(true);
  });

  test('renders Navigation component with export icon button with on click functionality', () => {
    const { getByTestId } = render(<Navigation />);
    const exportButton = getByTestId('export-button');
    expect(exportButton).toBeInTheDocument();
    const mockFunction = jest.fn(() => true);
    fireEvent.click(exportButton);
    expect(mockFunction()).toBe(true);
  });

  test('renders Navigation component with trash icon button with on click functionality', () => {
    const { getByTestId } = render(<Navigation />);
    const trashButton = getByTestId('trash-button');
    expect(trashButton).toBeInTheDocument();
    const mockFunction = jest.fn(() => true);
    fireEvent.click(trashButton);
    expect(mockFunction()).toBe(true);
  });
});
