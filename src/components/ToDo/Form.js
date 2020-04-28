import React, { useEffect, useContext, useRef, useState, useCallback } from "react";
import { TodoContext } from "../context/TodoProvider";

const Form = ({ setTaskIsBeingEdited, cleanEdit }) => {
  const inputRef = useRef(null);
  const { addTask } = useContext(TodoContext);
  const [value, setValue] = useState("");
  const onChange = useCallback(({ target: { value } }) => setValue(value), []);
  const onSubmit = (e) => {
    // e.preventDefault();
    handleAddTask(e);
    inputRef.current.focus();
  };

  const updateNewTitle = (title) => {
    setValue(title);
  };

  useEffect(() => {
    if (setTaskIsBeingEdited) updateNewTitle(setTaskIsBeingEdited.title);
  }, [setTaskIsBeingEdited]);

  const handleAddTask = (e) => {
    e.preventDefault();
    addTask(value);
    setValue("");
  };

  const onCancelEdit = (e) => {
    e.preventDefault();
    addTask(setTaskIsBeingEdited.title);
    setValue("");
    cleanEdit();
  };

  return (
    <form onSubmit={onSubmit} className="task-input">
      <input
        ref={inputRef}
        type="text"
        className="form-control fc"
        placeholder="Enter Task"
        onChange={onChange}
        value={value}
      />
      <button type="submit" className="btn btn-danger text-capitalize">
        Add
      </button>
      {setTaskIsBeingEdited && (
        <button onClick={onCancelEdit} className="btn btn-danger text-capitalize">
          Cancel
        </button>
      )}
    </form>
  );
};

export default Form;
