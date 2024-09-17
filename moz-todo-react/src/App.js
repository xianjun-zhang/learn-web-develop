import React, { useState, useReducer } from "react";
import AddTask from "./components/AddTask";
import FilterButton from "./components/FilterButton";
import TodoItem from "./components/TodoItem";
import { TasksContext, TasksDispatchContext, TasksReducer } from "./components/TasksContext";

const defaultTasks = [
  { id: "todo-0", name: "Eat", completed: true },
];


function App(props) {
  // Task Management Section
  // This section handles the state management for tasks using a reducer,
  // and defines functions for adding, toggling, deleting, and editing tasks.

  // Use the tasksReducer to manage the tasks state
  const initTasks = props && props.tasks ? props.tasks : defaultTasks;

  const [tasks, dispatch] = useReducer(TasksReducer, initTasks);
 
  
  // Filter Management Section
  // This section handles the state and logic for filtering tasks

  // State to keep track of the current filter
  const [filter, setFilter] = useState("All");

  // Object mapping filter names to their corresponding filter functions
  const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
  };

  // Array of filter names
  const FILTER_NAMES = Object.keys(FILTER_MAP);

  // Create a list of FilterButton components
  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));


  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <TodoItem
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
      />
    ));

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        <div className="todoapp stack-large">
          <h1>TodoMatic</h1>
          <AddTask />
          <div className="filters btn-group stack-exception">
            {filterList}
          </div>
          <h2 id="list-heading">{headingText}</h2>
          <ul
            role="list"
            className="todo-list stack-large stack-exception"
            aria-labelledby="list-heading"
          >
            {taskList}
          </ul>
        </div>
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export default App;
