
import { store } from '../store';
import { clearErrorAction } from '../store/api-actions';
import { setError } from '../store/main-screen-slice';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
