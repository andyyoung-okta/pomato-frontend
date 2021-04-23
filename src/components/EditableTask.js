import React, { Fragment, useState, useRef, useEffect } from "react";
import EditableTaskAction from "./EditableTaskAction";
import { tasklistActions } from "../store/tasklist";
import { useDispatch } from "react-redux";

const EditableTask = ({ task }) => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);
  const [name, setName] = useState(task.name);
  const [expected, setExpected] = useState(task.expected);
  const nameInput = useRef();

  useEffect(() => {
    if (!disabled) {
      nameInput.current.focus();
    }
  }, [disabled]);

  const editHandler = () => {
    setDisabled(false);
  };

  const deleteHandler = () => {
    dispatch(tasklistActions.remove(task.id));
  };

  const saveHandler = () => {
    setDisabled(true);
    dispatch(
      tasklistActions.update({
        id: task.id,
        actual: task.actual,
        name,
        expected,
      })
    );
  };

  const cancelHandler = () => {
    setDisabled(true);
    setName(task.name);
    setExpected(task.expected);
  };

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const expectedHandler = (event) => {
    setExpected(event.target.value);
  };

  const enterHandler = (event) => {
    if (event.code === 'Enter') {
      saveHandler();
    }
  }

  return (
    <div>
      <input
        className="border"
        type="text"
        value={name}
        onChange={nameHandler}
        onKeyDown={enterHandler}
        disabled={disabled}
        ref={nameInput}
      />
      <input
        className="border"
        type="text"
        value={expected}
        onChange={expectedHandler}
        onKeyDown={enterHandler}
        disabled={disabled}
      />
      {disabled && (
        <Fragment>
          <EditableTaskAction onClick={editHandler}>Edit</EditableTaskAction>
          <EditableTaskAction onClick={deleteHandler}>
            Delete
          </EditableTaskAction>
        </Fragment>
      )}
      {!disabled && (
        <Fragment>
          <EditableTaskAction onClick={saveHandler}>Save</EditableTaskAction>
          <EditableTaskAction onClick={cancelHandler}>
            Cancel
          </EditableTaskAction>
        </Fragment>
      )}
    </div>
  );
};

export default EditableTask;
