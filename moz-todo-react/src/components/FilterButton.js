import React from "react";
import { createContext, useContext, useReducer } from 'react';
import { TasksContext, TasksDispatchContext, TasksFilterContext } from './TasksContext';


function FilterButton(props) {
    const { name, isPressed, setFilter } = props;
    return (
      <button
        type="button"
        className="btn toggle-btn"
        aria-pressed={props.isPressed}
        onClick={() => props.setFilter(props.name)}>
        <span className="visually-hidden">Show </span>
        <span>{props.name}</span>
        <span className="visually-hidden"> tasks</span>
      </button>
    );
  }

  
  export default FilterButton;
  