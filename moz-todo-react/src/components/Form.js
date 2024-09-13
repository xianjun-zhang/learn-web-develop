import React from "react";
import { useState } from "react";



function Form(props) {
    const [name, setName] = useState("");

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (name && name.trim() !== "") {
            props.addTask(name);
            setName("");
        } else {
            alert("Error: Task can not be empty!");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
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
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    );
}

export default Form;
