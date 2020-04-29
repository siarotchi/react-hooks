import React, { useReducer, createContext, useCallback } from "react";
import reducer from "../reducers/todoReducer";
import { useBg, getFromStorage, useLocalStorage } from "../customHooks";
import ToDo from "../pages/ToDo";

export const TodoContext = createContext({});

const initialState = {
  tasks: getFromStorage("tasks"),
  tasksCount: 0,
};

const TodoProvider = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tasks, tasksCount } = state;
  const [color] = useBg(tasks);

  useLocalStorage("tasks", tasks);

  const addTask = (taskContent) => {
    if (!taskContent) return null;
    dispatch({ type: "ADD_TASK", payload: taskContent });
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

  const editTask = useCallback((payload) => {
    dispatch({ type: "EDIT_TASK", payload });
  }, []);

  return (
    <TodoContext.Provider
      value={{
        tasks,
        addTask,
        doneTask,
        deleteTask,
        editTask,
        clearAll,
        color,
        tasksCount,
      }}
    >
      <ToDo />
    </TodoContext.Provider>
  );
};

export default TodoProvider;
