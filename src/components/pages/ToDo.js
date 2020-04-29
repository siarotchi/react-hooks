import React, { useMemo, useContext, useRef, useState } from "react";
import Form from "../ToDo/Form";
import Notes from "../ToDo/Notes";
import { TodoContext } from "../context/TodoProvider";

const ToDo = () => {
  const { tasks = [], doneTask, color, deleteTask, editTask, clearAll, tasksCount } = useContext(TodoContext);
  const inputRef = useRef();
  const [containerHeight, setContainerHeight] = useState(300);

  const renderedTasksFcReducer = useMemo(
    () =>
      tasks.map((task, index) => (
        <Notes
          doneTask={() => doneTask(task.id)}
          deleteTask={() => deleteTask(task.id)}
          editTask={() => editTask(task.id)}
          task={task}
          key={task.id}
        />
      )),
    [tasks]
  );

  const calcHeight = () => {
    setContainerHeight(inputRef.current.getHeight());
  };

  return (
    <div className="todo-container" style={{ backgroundColor: color }}>
      <h3 className="todo-header">ToDo Height: {containerHeight}</h3>
      <hr />
      <h1 className="todo-header d-flex justify-content-center">ToDo List: {tasksCount} tasks to do.</h1>
      <Form ref={inputRef} calcHeight={calcHeight} />
      <hr />
      {renderedTasksFcReducer}
      <hr />
      <button onClick={clearAll} type="button" className="btn btn-primary btn-block text-capitalize ">
        clear all
      </button>
    </div>
  );
};

export default ToDo;
