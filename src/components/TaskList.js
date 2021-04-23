import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tasklistActions } from "../store/tasklist";
import EditableTask from "./EditableTask";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.tasklist.active);
  const username = useSelector((state) => state.username.username);

  const [editing, setEditing] = useState(null);

  const onEdit = (id) => {
    setEditing(id);
  };

  const onDelete = (id) => {
    dispatch(tasklistActions.remove(id));
  };

  const onSave = (task) => {
    setEditing(null);
    dispatch(tasklistActions.update(task));
  };

  const onCancel = () => {
    setEditing(null);
  };

  return (
    <Fragment>
      <div>Hi {username}, you are on TaskList!</div>
      {active.map((task) => (
        <EditableTask
          key={task.id}
          task={task}
          disabled={task.id !== editing}
          onEdit={onEdit}
          onDelete={onDelete}
          onSave={onSave}
          onCancel={onCancel}
        />
      ))}
      <TaskForm />
    </Fragment>
  );
};

export default TaskList;
