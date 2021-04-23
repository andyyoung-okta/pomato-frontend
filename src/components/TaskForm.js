import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { tasklistActions } from "../store/tasklist";

const TaskForm = () => {
  const dispatch = useDispatch();
  const nameInput = useRef();
  const expectedInput = useRef();

  useEffect(() => {
    nameInput.current.focus();
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch(
      tasklistActions.add({
        name: nameInput.current.value,
        expected: expectedInput.current.value,
      })
    );

    nameInput.current.value = '';
    expectedInput.current.value = '';
    nameInput.current.focus();
  };

  return (
    <form onSubmit={submitHandler}>
      <input className="border" type="text" ref={nameInput} />
      <input className="border" type="text" ref={expectedInput} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
