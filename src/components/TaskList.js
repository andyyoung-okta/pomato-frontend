import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const TaskList = () => {
  const active = useSelector((state) => state.tasklist.active);
  return (
    <div>
      {active.map(({ id, name, expected, actual }) => (
        <Task key={id} name={name} expected={expected} actual={actual} />
      ))}
    </div>
  );
};

export default TaskList;
