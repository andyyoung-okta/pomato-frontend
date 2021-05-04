import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { timerActions } from "../store/timer";
import { tasklistActions } from "../store/tasklist";
import TaskList from "./TaskList";

const Timer = () => {
  const dispatch = useDispatch();
  const seconds = useSelector((state) => state.timer.seconds);
  const pomo = useSelector((state) => state.timer.pomo);
  const total = useSelector((state) => state.timer.total);

  console.log("render", seconds, pomo, total);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => {
        dispatch(timerActions.tick());
      }, 1000);
    } else if (!pomo) {
      dispatch(tasklistActions.increment());
    }
  }, [seconds]);

  const content = () => {
    if (!seconds) {
      return "START";
    }

    return `
      ${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, "0")}
    `;
  };

  const startHandler = () => {
    if (pomo) {
      dispatch(timerActions.set(3));
    } else if (total % 4 === 0) {
      dispatch(timerActions.set(2));
    } else {
      dispatch(timerActions.set(1));
    }
  }

  return (
    <div>
      <button onClick={startHandler} disabled={seconds > 0}>
        {content()}
      </button>
      {
        !pomo && <button>DONE</button>
      }
      {total}
      <TaskList />
    </div>
  );
};

export default Timer;
