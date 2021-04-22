import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Tasks from "./Tasks";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const username = useSelector((state) => state.username.username);

  return (
    <Fragment>
      <div>Hi {username}, you are on TaskList!</div>
      <Tasks />
    </Fragment>
  );
};

export default TaskList;
