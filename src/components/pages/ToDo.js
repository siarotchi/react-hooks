import React, { useMemo, useContext } from "react";
import Form from "../ToDo/Form";
import Notes from "../ToDo/Notes";
import TodoProvider from "../context/TodoProvider";
import { TodoContext } from "../context/TodoProvider";

const ToDo = () => {
  const {
    tasks = [],
    doneTask,
    color,
    deleteTask,
    editTask,
    cleanEdit,
    clearAll,
    tasksCount,
    setTaskIsBeingEdited,
  } = useContext(TodoContext);

  console.log(tasks);

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

  return (
    <TodoProvider>
      <div className="todo-container" style={{ backgroundColor: color }}>
        <hr />
        <h1 className="todo-header d-flex justify-content-center">ToDo List: {tasksCount} tasks to do.</h1>
        <Form setTaskIsBeingEdited={setTaskIsBeingEdited} cleanEdit={cleanEdit} />
        <hr />
        {renderedTasksFcReducer}
        <hr />
        <button onClick={clearAll} type="button" className="btn btn-primary btn-block text-capitalize ">
          clear all
        </button>
      </div>
    </TodoProvider>
  );
};

export default ToDo;
