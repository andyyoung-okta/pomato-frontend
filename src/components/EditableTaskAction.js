const EditableTaskAction = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default EditableTaskAction;
