import { useEffect, useState } from 'react';
import CityList from '../components/CityList/CityList';
import OfferList from '../components/OfferList/OfferList';
import OfferMap from '../components/OfferMap/OfferMap';
import { useAppDispatch, useAppSelector } from '../hooks';
import { cities } from '../mocks/cities';

import Spinner from '../components/Layout/Spinner';
import { getAuthCheckedStatus, getCurrentCity, getCurrentOffers, getDataLoading, getErrorStatus } from '../store/selectors';
import LoadingFallback from '../components/LoadingFallback';
import { fetchOffersAction } from '../store/thunks/offer-actions';

export default function MainPage() {
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const currentCity = useAppSelector(getCurrentCity);
  const currentOffers = useAppSelector(getCurrentOffers);
  const offersLoading = useAppSelector(getDataLoading);
  const isLoadingError = useAppSelector(getErrorStatus);

  const dispatch = useAppDispatch();
  const[activeOfferId, setActiveOfferId] = useState<string | null>(null);

  useEffect(
    () => {
      dispatch(fetchOffersAction());
    }, [currentCity, dispatch]
  );

  function handleCardHover(id: string | null) {
    setActiveOfferId(id);
  }

  if (!isAuthChecked || offersLoading) {
    return (<Spinner />);
  }

  if (isLoadingError) {
    return (
      <LoadingFallback />);
  }

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CityList items={cities} cityName={currentCity.name} />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{currentOffers.length} {currentOffers.length === 1 ? 'place' : 'places'} to stay in {currentCity.name}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}> Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            <OfferList offers={currentOffers} onCardHover={handleCardHover} />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map" style={{background: 'none'}}>
              <OfferMap city={currentCity} offers={currentOffers} activeOfferId={activeOfferId} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
