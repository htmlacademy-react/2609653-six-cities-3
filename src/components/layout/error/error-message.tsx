import { useAppSelector } from '../../../hooks';
import { getErrorText } from '../../../store/selectors';
import './ErrorMessage.css';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getErrorText);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;

}

export default ErrorMessage;
