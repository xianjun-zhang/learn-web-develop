import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

const mockTasks = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

jest.mock('./components/TasksContext', () => ({
  ...jest.requireActual('./components/TasksContext'),
  TasksContext: {
    Provider: ({ children }) => children,
    Consumer: ({ children }) => children(mockTasks),
  },
  TasksDispatchContext: {
    Provider: ({ children }) => children,
    Consumer: ({ children }) => children(jest.fn()),
  },
}));

describe('App', () => {
  test('renders all tasks by default', () => {
    render(<App tasks={mockTasks} />);
    expect(screen.getByText('Eat')).toBeInTheDocument();
    expect(screen.getByText('Sleep')).toBeInTheDocument();
    expect(screen.getByText('Repeat')).toBeInTheDocument();
  });

  test('filters active tasks when Active filter is clicked', () => {
    render(<App tasks={mockTasks} />);
    fireEvent.click(screen.getByText('Active'));
    expect(screen.queryByText('Eat')).not.toBeInTheDocument();
    expect(screen.getByText('Sleep')).toBeInTheDocument();
    expect(screen.getByText('Repeat')).toBeInTheDocument();
  });

  test('filters completed tasks when Completed filter is clicked', () => {
    render(<App tasks={mockTasks} />);
    fireEvent.click(screen.getByText('Completed'));
    expect(screen.getByText('Eat')).toBeInTheDocument();
    expect(screen.queryByText('Sleep')).not.toBeInTheDocument();
    expect(screen.queryByText('Repeat')).not.toBeInTheDocument();
  });

  test('shows all tasks when All filter is clicked', () => {
    render(<App tasks={mockTasks} />);
    fireEvent.click(screen.getByText('Completed'));
    fireEvent.click(screen.getByText('All'));
    expect(screen.getByText('Eat')).toBeInTheDocument();
    expect(screen.getByText('Sleep')).toBeInTheDocument();
    expect(screen.getByText('Repeat')).toBeInTheDocument();
  });
});