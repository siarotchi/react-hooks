import { v4 as uuidv4 } from "uuid";

const reducer = (state, { type, payload }) => {
  const handlers = {
    ADD_TASK: () => ({
      ...state,
      tasks: [...state.tasks, { id: uuidv4(), title: payload, done: false }],
      tasksCount: state.tasks.length + 1,
    }),
    DONE_TASK: (state, id) => ({
      ...state,
      tasks: state.tasks.map((task) => (task.id === id ? ((task.done = true), task) : task)),
    }),
    DELETE_TASK: (state, id) => ({
      ...state,
      tasks: state.tasks.filter((task) => task.id !== id),
      tasksCount: state.tasksCount - 1,
    }),
    CLEAR_ALL: (state) => ({
      ...state,
      tasks: [],
      tasksCount: 0,
    }),
    EDIT_TASK: () => ({
      ...state,
      tasks: state.tasks.map((task) => {
        if (task.id === payload.id) task.title = payload.title;
        return task;
      }),
    }),
  };
  if (type) {
    return handlers[type](state, payload) || state;
  } else return;
};

export default reducer;
