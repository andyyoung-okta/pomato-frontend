import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tasklistActions } from "../store/tasklist";
import EditableTask from "./EditableTask";

const TaskList = () => {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.tasklist.active);
  const username = useSelector((state) => state.username.username);

  const addTask = () => {
    dispatch(
      tasklistActions.add({
        name: "lmao",
        expected: 1,
      })
    );
  };

  return (
    <Fragment>
      <div>Hi {username}, you are on TaskList!</div>
      {active.map((task) => (
        <EditableTask key={task.id} task={task} />
      ))}
      <button onClick={addTask}>add task</button>
    </Fragment>
  );
};

export default TaskList;
