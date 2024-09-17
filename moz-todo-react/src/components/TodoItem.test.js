import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';
import { TasksDispatchContext } from './TasksContext';

describe('TodoItem', () => {
  const mockDispatch = jest.fn();

  const defaultProps = {
    id: 'todo-1',
    name: 'Test Todo',
    completed: false
  };

  beforeEach(() => {
    mockDispatch.mockClear();
  });

  test('renders TodoItem correctly', () => {
    render(
      <TasksDispatchContext.Provider value={mockDispatch}>
        <TodoItem {...defaultProps} />
      </TasksDispatchContext.Provider>
    );

    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  test('toggles task completion when checkbox is clicked', () => {
    render(
      <TasksDispatchContext.Provider value={mockDispatch}>
        <TodoItem {...defaultProps} />
      </TasksDispatchContext.Provider>
    );

    fireEvent.click(screen.getByRole('checkbox'));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'completed',
      id: 'todo-1'
    });
  });

  test('enters edit mode when Edit button is clicked', () => {
    render(
      <TasksDispatchContext.Provider value={mockDispatch}>
        <TodoItem {...defaultProps} />
      </TasksDispatchContext.Provider>
    );

    fireEvent.click(screen.getByText('Edit'));

    expect(screen.getByLabelText(/New name for/)).toBeInTheDocument();
  });

  test('updates task name when edit form is submitted', () => {
    render(
      <TasksDispatchContext.Provider value={mockDispatch}>
        <TodoItem {...defaultProps} />
      </TasksDispatchContext.Provider>
    );

    fireEvent.click(screen.getByText('Edit'));
    fireEvent.change(screen.getByLabelText(/New name for/), { target: { value: 'Updated Todo' } });
    fireEvent.click(screen.getByText('Save'));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'edit',
      id: 'todo-1',
      newName: 'Updated Todo'
    });
  });

  test('deletes task when Delete button is clicked', () => {
    render(
      <TasksDispatchContext.Provider value={mockDispatch}>
        <TodoItem {...defaultProps} />
      </TasksDispatchContext.Provider>
    );

    fireEvent.click(screen.getByText('Delete'));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'deleted',
      id: 'todo-1'
    });
  });
});