import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { toastActions } from "../store/toast";
import { globalActions } from "../store/global";

const UsernameForm = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const formHandler = (event) => {
    event.preventDefault();
    if (inputRef.current.value.trim().length === 0) {
      dispatch(toastActions.add("error: username is empty!"));
    } else {
      dispatch(globalActions.setUsername(inputRef.current.value));
    }
  };

  return (
    <form onSubmit={formHandler}>
      <label>Username</label>
      <input className="border" type="text" ref={inputRef} />
      <button type="submit">Get Started</button>
    </form>
  );
};

export default UsernameForm;
