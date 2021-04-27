import React, { Fragment, useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import EditableTask from "./EditableTask";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const active = useSelector((state) => state.tasklist.active);
  const username = useSelector((state) => state.username.username);
  const initialInputs = active.reduce(
    (obj, { id, name, expected }) => ((obj[id] = [name, expected]), obj),
    {}
  );
  const [inputs, setInputs] = useState(initialInputs);
  const [editing, setEditing] = useState(null);

  const formInput = useRef();

  useEffect(() => {
    setInputs(initialInputs);
    formInput.current.focus();
  }, [active]);

  return (
    <Fragment>
      <div>Hi {username}, you are on TaskList!</div>
      {Object.entries(inputs).map(([id]) => (
        <EditableTask
          key={id}
          id={id}
          initialInputs={initialInputs}
          inputs={inputs}
          setInputs={setInputs}
          editing={editing}
          setEditing={setEditing}
        />
      ))}
      <TaskForm mainInput={formInput} />
    </Fragment>
  );
};

export default TaskList;
