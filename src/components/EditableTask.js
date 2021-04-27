import React, { Fragment, useRef } from "react";
import { useDispatch } from "react-redux";
import { tasklistActions } from "../store/tasklist";
import EditableTaskAction from "./EditableTaskAction";

const EditableTask = ({ id, sync, inputs, setInputs, editing, setEditing }) => {
  const dispatch = useDispatch();
  const [name, expected] = inputs[id];
  const disabled = id !== editing;
  const [nameInput, expectedInput] = [useRef(), useRef()];

  console.log(name, expected);

  const inputHandler = () => {
    setInputs((prevState) => {
      return {
        ...prevState,
        [id]: [nameInput.current.value, expectedInput.current.value],
      };
    });
  }

  const editHandler = () => {
    sync();
    setEditing(id);
    nameInput.current.focus();
  }

  const deleteHandler = () => {
    setEditing(null);
    dispatch(tasklistActions.remove(id));
  }

  const saveHandler = () => {
    setEditing(null);
    dispatch(
      tasklistActions.update({
        id,
        name,
        expected,
      })
    );
  }

  const cancelHandler = () => {
    sync();
    setEditing(null);
  }

  return (
    <form onSubmit={saveHandler}>
      <input
        className="border"
        type="text"
        disabled={disabled}
        value={name}
        onChange={inputHandler}
        ref={nameInput}
      />
      <input
        className="border"
        type="text"
        disabled={disabled}
        value={expected}
        onChange={inputHandler}
        ref={expectedInput}
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
          <EditableTaskAction onClick={saveHandler} type="submit">
            Save
          </EditableTaskAction>
          <EditableTaskAction onClick={cancelHandler}>
            Cancel
          </EditableTaskAction>
        </Fragment>
      )}
    </form>
  );
};

export default EditableTask;
