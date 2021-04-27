import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { tasklistActions } from "../store/tasklist";

const TaskForm = ({ mainInput }) => {
  const dispatch = useDispatch();

  const initialState = {
    name: "",
    expected: "",
  };

  const [inputs, setInputs] = useState(initialState);
  const [disabled, setDisabled] = useState(true);

  const isEmpty = (string) => {
    return string.trim().length === 0;
  };

  useEffect(() => {
    setDisabled(isEmpty(inputs.name) || isEmpty(inputs.expected));
  }, [inputs]);

  const inputHandler = (event) => {
    setDisabled(event.target.value.trim().length === 0);
    setInputs((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(tasklistActions.add({ ...inputs }));
    setInputs(initialState);
  };

  return (
    <form onSubmit={submitHandler}>
      <input className="border" type="text" onChange={inputHandler} name="name" value={inputs.name} ref={mainInput} />
      <input className="border" type="text" onChange={inputHandler} name="expected" value={inputs.expected} />
      <button type="submit" disabled={disabled}>Add Task</button>
    </form>
  );
};

export default TaskForm;
