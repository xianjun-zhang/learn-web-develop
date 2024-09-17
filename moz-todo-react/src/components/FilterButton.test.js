import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FilterButton from './FilterButton';

describe('FilterButton', () => {
  const mockSetFilter = jest.fn();

  test('renders button with correct name', () => {
    render(<FilterButton name="All" isPressed={false} setFilter={mockSetFilter} />);
    expect(screen.getByText('All')).toBeInTheDocument();
  });

  test('calls setFilter with correct name when clicked', () => {
    render(<FilterButton name="Active" isPressed={false} setFilter={mockSetFilter} />);
    fireEvent.click(screen.getByText('Active'));
    expect(mockSetFilter).toHaveBeenCalledWith('Active');
  });

  test('has correct aria-pressed attribute when pressed', () => {
    render(<FilterButton name="Completed" isPressed={true} setFilter={mockSetFilter} />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true');
  });

  test('has correct aria-pressed attribute when not pressed', () => {
    render(<FilterButton name="All" isPressed={false} setFilter={mockSetFilter} />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'false');
  });
});