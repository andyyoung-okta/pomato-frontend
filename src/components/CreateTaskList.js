import React, { Fragment, useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditableTask from "./EditableTask";
import TaskForm from "./TaskForm";
import { globalActions } from "../store/global";

const CreateTaskList = () => {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.tasklist.active);
  const username = useSelector((state) => state.global.username);

  const syncedInputs = () => {
    return active.reduce(
      (obj, { id, name, expected }) => ((obj[id] = [name, expected]), obj),
      {}
    );
  };

  const [inputs, setInputs] = useState(syncedInputs());
  const [editing, setEditing] = useState(null);

  const formInput = useRef();

  const sync = () => {
    setInputs(syncedInputs());
  };

  useEffect(() => {
    sync();
    console.log("synced");
    formInput.current.focus();
  }, [active]);

  const startHandler = () => {
    dispatch(globalActions.start());
  }

  return (
    <Fragment>
      <div>Hi {username}, you are on CreateTaskList!</div>
      <button onClick={startHandler} disabled={active.length === 0}>Start Session</button>
      {Object.entries(inputs).map(([id]) => (
        <EditableTask
          key={id}
          id={id}
          sync={sync}
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

export default CreateTaskList;
