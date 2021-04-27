import React, { Fragment, useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import EditableTask from "./EditableTask";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const active = useSelector((state) => state.tasklist.active);
  const username = useSelector((state) => state.username.username);
  const [editing, setEditing] = useState(null);

  const formInput = useRef();

  useEffect(() => {
    formInput.current.focus();
  }, [active]);

  return (
    <Fragment>
      <div>Hi {username}, you are on TaskList!</div>
      {active.map(({ id }) => (
        <EditableTask
          key={id}
          id={id}
          editing={editing}
          setEditing={setEditing}
        />
      ))}
      <TaskForm mainInput={formInput} />
    </Fragment>
  );
};

export default TaskList;
