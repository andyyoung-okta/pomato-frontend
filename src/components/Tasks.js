import React, { Fragment } from 'react';

const Tasks = () => {
  const tasks = [];
  return (
    <Fragment>
      {tasks.map(({ id, task, expected, actual }) => <div>{`${task}`}</div>)}
    </Fragment>
  );
}

export default Tasks;