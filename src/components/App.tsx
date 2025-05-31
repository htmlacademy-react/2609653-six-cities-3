import { Route, Routes } from 'react-router-dom';
import PageLayout from './Layout/PageLayout';
import NotFound from '../pages/not-found';
import MainPage from '../pages/main';
import OfferPage from '../pages/offer';
import LoginPage from '../pages/login';
import FavoritesPage from '../pages/favorites';
import PrivateRoute from './Routes/PrivateRoute';
import { AppRoute } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useEffect } from 'react';
import { checkAuthAction } from '../store/thunks/user-actions';
import { getAuthorizationStatus } from '../store/selectors';

function App() {
  const authStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  useEffect(
    () => {
      dispatch(checkAuthAction());
    }, [dispatch]
  );

  return (
    <Routes>
      <Route path={AppRoute.Main} element={<PageLayout />}>
        <Route index element={<MainPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorizationStatus={authStatus}>
            <FavoritesPage />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Offer} element={<OfferPage />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
