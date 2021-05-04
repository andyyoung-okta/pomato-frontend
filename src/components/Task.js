const Task = ({ name, expected, actual }) => {
  return (
    <div>
      {name}, {expected}, {actual}
    </div>
  )
}

export default Task;