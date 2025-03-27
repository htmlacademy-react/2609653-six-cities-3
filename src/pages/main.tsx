import { useEffect } from 'react';
import CityList from '../components/CityList/CityList';
import OfferList from '../components/OfferList/OfferList';
import OfferMap from '../components/OfferMap/OfferMap';
import { useAppDispatch, useAppSelector } from '../hooks';
import { cities } from '../mocks/cities';
import { assignOffers } from '../store/action';
import { OFFER_LIMIT_DEFFAULT } from '../const';
import { fetchOffers } from '../mocks/fetchOffers';

export default function MainPage() {
  const currentCity = useAppSelector((state) => state.city);
  const currentOffers = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();

  useEffect(
    () => {
      const offers = fetchOffers(currentCity, OFFER_LIMIT_DEFFAULT);
      dispatch(assignOffers(offers));
    }, [currentCity, dispatch]
  );

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CityList items={cities} cityId={currentCity.id} />
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
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            <OfferList offers={currentOffers} />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map" style={{background: 'none'}}>
              <OfferMap city={currentCity} offers={currentOffers} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
