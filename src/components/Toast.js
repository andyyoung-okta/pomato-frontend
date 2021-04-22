import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toastActions } from '../store/toast';

const Toast = () => {
  const dispatch = useDispatch();
  const added = useSelector((state) => state.toast.added);
  const messages = useSelector((state) => state.toast.messages);

  useEffect(() => {
    if (added) {
      setTimeout(() => {
        dispatch(toastActions.remove());
      }, 2000);
    }
  }, [messages]);

  return (
    <div>
      {messages.slice(0, 5).map(({ id, message }) => <div key={id}>{message}</div>)}
    </div>
  )
}

export default Toast;
