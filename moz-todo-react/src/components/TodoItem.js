import React, { useState, useContext } from "react";
import { TasksDispatchContext } from "./TasksContext";

export default function TodoItem(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState('');
    const dispatch = useContext(TasksDispatchContext);

    function HandleChange(e) {
        setNewName(e.target.value);
    }

    function HandleSubmit(e) {
        e.preventDefault();
        if (newName.trim() !== "") {
            // props.editTask(props.id, newName);
            dispatch({
                type: 'edit',
                id: props.id,
                newName: newName
            });
            setIsEditing(false);
            setNewName('');
        }
    }

    function ToggleTaskCompleted(id) {
        dispatch({
            type: 'completed',
            id: id
        });
    }

    function DeleteTask(id) {
        dispatch({
            type: 'deleted',
            id: id
        });
    }
    
    const editingTemplate = (
        <form className="stack-small" onSubmit={HandleSubmit}>
          <div className="form-group">
            <label className="todo-label" htmlFor={props.id}>
              New name for {props.name}
            </label>
            <input
              id={props.id}
              className="todo-text"
              type="text"
              onChange={HandleChange}
              value={newName}
            />
          </div>
          <div className="btn-group">
            <button
              type="button"
              className="btn todo-cancel"
              onClick={() => setIsEditing(false)}
            >
              Cancel
              <span className="visually-hidden">renaming {props.name}</span>
            </button>
            <button
              type="submit"
              className="btn btn__primary todo-edit"
            >
              Save
              <span className="visually-hidden">new name for {props.name}</span>
            </button>
          </div>
        </form>
    );
    const viewTemplate = (
      <div className="stack-small">
        <div className="c-cb">
          <input
            id={props.id}
            type="checkbox"
            defaultChecked={props.completed}
            onChange={() => ToggleTaskCompleted(props.id)}
          />
          <label className="todo-label" htmlFor={props.id}>
            {props.name}
          </label>
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn"
            onClick={() => setIsEditing(true)}
          >
            Edit <span className="visually-hidden">{props.name}</span>
          </button>
          <button
            type="button"
            className="btn btn__danger"
            onClick={() => DeleteTask(props.id)}
          >
            Delete <span className="visually-hidden">{props.name}</span>
          </button>
        </div>
      </div>
    );
      
    return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}
