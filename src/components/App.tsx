import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from './Layout/PageLayout';
import NotFound from '../pages/not-found';
import MainPage from '../pages/main';
import OfferPage from '../pages/offer';
import LoginPage from '../pages/login';
import FavoritesPage from '../pages/favorites';
import PrivateRoute from './Routes/PrivateRoute';
import { AppRoute, AuthorizationStatus } from '../const';
import { Offer } from '../types/offer';
import { favoriteOffers } from '../mocks/offers';

type AppProps = { totalPlacesCount: number; offers: Offer[] }

function App({ totalPlacesCount, offers }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<PageLayout />}>
          <Route index element={<MainPage placesCount={totalPlacesCount} offers={offers} />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesPage offers={favoriteOffers} />
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Offer} element={<OfferPage />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
