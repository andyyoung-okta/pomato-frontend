import React, { Fragment } from "react";
import UsernameForm from "../components/UsernameForm";
import CreateTaskList from "../components/CreateTaskList";
import Timer from "../components/Timer";
import { useSelector } from "react-redux";

const AppBody = () => {
  const username = useSelector((state) => state.global.username);
  const started = useSelector((state) => state.global.started);

  console.log(username);

  if (!username) {
    return <UsernameForm />;
  }

  if (!started) {
    return <CreateTaskList />;
  }

  return <Timer minutes={1} />;
};

export default AppBody;
