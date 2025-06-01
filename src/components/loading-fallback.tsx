import { useAppDispatch } from '../hooks';
import { fetchOffersAction } from '../store/thunks/offer-actions';


function LoadingFallback(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <>
      <p className="error__text">Не удалось загрузить вопросы</p>
      <button
        onClick={() => {
          dispatch(fetchOffersAction());
        }}
        className="replay replay--error"
        type="button"
      >
                Попробовать ещё раз
      </button>
    </>
  );
}

export default LoadingFallback;
