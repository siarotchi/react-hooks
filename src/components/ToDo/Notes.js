import React, { useState, useContext } from "react";
import { ActionBtn, EditActionsBtn } from "../ToDo/ActionBtn";
import { TodoContext } from "../context/TodoProvider";

const Notes = ({ task, doneTask, deleteTask }) => {
  const className = `task ${task.done ? "lineTh" : ""}`;

  const [isEdit, setIsEdit] = useState(false);
  const { editTask } = useContext(TodoContext);
  const [editedValue, setEditedValue] = useState(task.title);

  const onEdit = () => {
    setIsEdit(true);
  };

  const handleEditValue = (e) => {
    setEditedValue(e.target.value);
  };

  const onCancel = () => {
    setIsEdit(false);
    setEditedValue(task.title);
  };

  const onSubmit = () => {
    editTask({ id: task.id, title: editedValue });
    setIsEdit(false);
  };

  return (
    <div className="container">
      <ul className="list-group">
        <li className="list-group-item note">
          {isEdit ? (
            <input value={editedValue} onChange={handleEditValue} />
          ) : (
            <div className={className}>{task.title}</div>
          )}
          <div key="buttons" className="buttons">
            {!isEdit ? (
              [
                <button key="editButton" onClick={onEdit} type="button" className="btn btn-info edit text-capitalize">
                  edit
                </button>,
                <ActionBtn key="actionbtn" task={task} doneTask={doneTask} deleteTask={deleteTask} />,
              ]
            ) : (
              <EditActionsBtn onCancel={onCancel} onSubmit={onSubmit} />
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Notes;
