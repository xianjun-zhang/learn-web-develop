import React from "react";
import { useState, useContext } from "react";
import { nanoid } from "nanoid";
import { TasksDispatchContext } from "./TasksContext";

function AddTask(props) {
    const dispatch = useContext(TasksDispatchContext);

    const [name, setName] = useState("");

    function HandleChange(e) {
        setName(e.target.value);
    }

    function AddTaskFunction(event) {
        event.preventDefault();
        if (name && name.trim() !== "") {
            dispatch({
                type: 'add',
                id: `todo-${nanoid()}`, // Generate a unique ID for the new task
                name: name
            });
            setName("");
        } else {
            alert("Error: Task can not be empty!");
        }
    }

    return (
        <form onSubmit={AddTaskFunction}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What needs to be done?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={HandleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    );
}

export default AddTask;
