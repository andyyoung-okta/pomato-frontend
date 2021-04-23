import React, { Fragment, useState, useRef, useEffect } from "react";
import EditableTaskAction from "./EditableTaskAction";

const EditableTask = ({
  task,
  disabled,
  onEdit,
  onDelete,
  onSave,
  onCancel,
}) => {
  const [name, setName] = useState(task.name);
  const [expected, setExpected] = useState(task.expected);
  const nameInput = useRef();

  useEffect(() => {
    if (!disabled) {
      nameInput.current.focus();
    }
  }, [disabled]);

  const editHandler = () => {
    onEdit(task.id);
  };

  const deleteHandler = () => {
    onDelete(task.id);
  };

  const saveHandler = () => {
    onSave({
      id: task.id,
      actual: task.actual,
      name,
      expected,
    });
  };

  const cancelHandler = () => {
    setName(task.name);
    setExpected(task.expected);
    onCancel();
  };

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const expectedHandler = (event) => {
    setExpected(event.target.value);
  };

  const enterHandler = (event) => {
    if (event.code === "Enter") {
      saveHandler();
    }
  };

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
