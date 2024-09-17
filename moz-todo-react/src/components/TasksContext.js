import { createContext, useContext, useReducer } from 'react';

// This reducer function manages the state of tasks based on different actions
// Each action is an object with a 'type' property and additional data
// The function takes the current state (tasks) and an action as arguments
// It returns a new state based on the action type

// Tasks structure:
// tasks is an array of task objects, where each task has the following structure:
// {
//   id: string,           // Unique identifier for the task (e.g., "todo-0")
//   name: string,         // The name or description of the task
//   completed: boolean    // Whether the task is completed or not
// }
// Note: The initial tasks array is passed from index.js to App.js as props.tasks
// and then used as the initial state in the useReducer hook in App.js

// Action object structure:
// {
//   type: 'add' | 'edit' | 'deleted' | 'completed',
//   id: string,           // Task ID (for all actions except 'add')
//   name?: string,        // New task name (for 'add' and 'edit' actions)
//   newName?: string      // Updated task name (for 'edit' action)
// }

// Note: The initial tasks array is passed from index.js to App.js as props.tasks
// and then used as the initial state in the useReducer hook in App.js


export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);
export const TasksFilterContext = createContext(null);


export function TasksReducer(tasks, action) {
    switch (action.type) {
      case 'add': {
        // Note: We use the spread operator [...tasks] to create a new array
        // instead of using tasks.push(). This is because React relies on
        // immutability to detect changes and trigger re-renders.
        // If we used tasks.push(), React wouldn't recognize the change
        // in the state, and the component wouldn't re-render.
        if (action.name && action.name.trim() !== "") {
            return [...tasks, {
                id: action.id,
                name: action.name,
                completed: false
            }];
        }
        return tasks;
      }

      case 'edit': {
        // Note: We use tasks.map() to create a new array with the updated task
        // instead of directly modifying the task object. This is because React
        // relies on immutability to detect changes and trigger re-renders.
        // If we directly changed task[index].name, React wouldn't recognize
        // the change in the state, and the component wouldn't re-render.
        return tasks.map(task => 
          task.id === action.id 
            ? { ...task, name: action.newName }
            : task
        );
      }

      case 'deleted': {
        return tasks.filter((t) => t.id !== action.id);
      }

      case 'completed': {
        // Old implementation: Directly mutating state
        // const completedIndex = tasks.findIndex((t) => t.id === action.id);
        // tasks[completedIndex].completed = !tasks[completedIndex].completed;
        // return tasks;

        // New implementation: Creating a new array with the updated task
        // This ensures immutability and proper state updates in React
        // We use tasks.map() to create a new array instead of directly modifying
        // the existing task. This is because React relies on immutability to
        // detect changes and trigger re-renders. If we directly changed
        // task.completed, React wouldn't recognize the change in the state,
        // and the component wouldn't re-render. By creating a new array with
        // the spread operator {...task}, we ensure that React detects the change
        // and updates the UI accordingly.
        return tasks.map(task =>
          task.id === action.id
            ? { ...task, completed: !task.completed }
            : task
        );
      }

      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
}
