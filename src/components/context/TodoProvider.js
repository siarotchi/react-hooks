import React, { useReducer, createContext, useCallback } from "react";
import reducer from "../reducers/todoReducer";
import { useBg, getFromStorage, useLocalStorage } from "../customHooks";

export const TodoContext = createContext({});

const initialState = {
  tasks: getFromStorage("tasks"),
  tasksCount: 0,
  setTaskIsBeingEdited: false,
};

const TodoProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tasks, value, tasksCount, setTaskIsBeingEdited } = state;
  const [color] = useBg(tasks);

  console.log(tasks);

  useLocalStorage("tasks", tasks);

  const addTask = (taskContent) => {
    if (!taskContent) return null;
    dispatch({ type: "ADD_TASKS", payload: taskContent });
  };

  const doneTask = (id) => {
    dispatch({ type: "DONE_TASK", payload: id });
  };

  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const clearAll = useCallback(() => {
    dispatch({ type: "CLEAR_ALL" });
  }, []);

  const cleanEdit = useCallback(() => {
    dispatch({ type: "CLEAN_EDIT" });
  }, []);

  const editTask = (id) => {
    dispatch({
      type: "EDIT_TASK",
      payload: id,
    });
  };

  return (
    <TodoContext.Provider
      value={{
        tasks,
        addTask,
        doneTask,
        deleteTask,
        clearAll,
        cleanEdit,
        editTask,
        color,
        tasksCount,
        setTaskIsBeingEdited,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
