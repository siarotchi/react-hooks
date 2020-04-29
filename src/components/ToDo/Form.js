import React, { useContext, useRef, useState, useCallback, useImperativeHandle, forwardRef } from "react";
import { TodoContext } from "../context/TodoProvider";

const Form = ({ calcHeight }, ref) => {
  const inputRef = useRef(null);
  const { addTask } = useContext(TodoContext);
  const [value, setValue] = useState("");

  const onChange = useCallback(({ target: { value } }) => setValue(value), []);
  const onSubmit = (e) => {
    e.preventDefault();
    handleAddTask(e);
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => ({
    getHeight: () => {
      return inputRef.current.offsetParent.clientHeight;
    },
  }));

  const handleAddTask = () => {
    addTask(value);
    calcHeight();
    setValue("");
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
    </form>
  );
};

export default forwardRef(Form);
