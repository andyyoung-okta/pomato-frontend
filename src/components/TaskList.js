import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import EditableTask from "./EditableTask";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const active = useSelector((state) => state.tasklist.active);
  const username = useSelector((state) => state.username.username);

  return (
    <Fragment>
      <div>Hi {username}, you are on TaskList!</div>
      {active.map((task) => (
        <EditableTask key={task.id} task={task} />
      ))}
      <TaskForm />
    </Fragment>
  );
};

export default TaskList;
