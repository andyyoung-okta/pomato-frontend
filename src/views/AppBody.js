import React, { Fragment } from "react";
import UsernameForm from "../components/UsernameForm";
import TaskList from "../components/TaskList";
import { useSelector } from "react-redux";

const AppBody = () => {
  const username = useSelector((state) => state.username.username);

  const content = () => {
    if (!username) {
      return <UsernameForm />;
    } else {
      return <TaskList />;
    }
  };

  return content();
};

export default AppBody;
