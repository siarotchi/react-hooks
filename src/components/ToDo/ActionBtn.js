import React from "react";

export const ActionBtn = ({ task, doneTask, deleteTask }) => {
  return (
    <div className="action-btn">
      {!task.done ? (
        <button onClick={doneTask} type="button" className="btn btn-outline-success btn-lg">
          &#10003;
        </button>
      ) : (
        <button onClick={deleteTask} type="button" className="btn btn-outline-danger btn-lg">
          &#10006;
        </button>
      )}
    </div>
  );
};

export const EditActionsBtn = ({ onCancel, onSubmit }) => {
  return (
    <div className="action-btn">
      <button onClick={onSubmit} type="button" className="btn btn-outline-success btn-lg m-1">
        &#10003;
      </button>
      <button onClick={onCancel} type="button" className="btn btn-outline-danger btn-lg">
        &#10006;
      </button>
    </div>
  );
};
