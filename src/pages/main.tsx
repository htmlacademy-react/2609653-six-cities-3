//import { current } from '@reduxjs/toolkit';
import CityList from '../components/CityList/CityList';
import OfferList from '../components/OfferList/OfferList';
import OfferMap from '../components/OfferMap/OfferMap';
import { useAppSelector } from '../hooks';
import { cities } from '../mocks/cities';

type MainProps = {
  //city: City;
  //placesCount: number;
  //offers: Offer[];
}

export default function MainPage(props: MainProps) {
//const state = useAppSelector((state) => state);
  const currentCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  //const dispatch = useAppDispatch();

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CityList items={cities} selected={currentCity.id} />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} {offers.length !== 1 ? 'places' : 'place'} to stay in {currentCity.name}</b>
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
            <OfferList offers={offers} />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map" style={{background: 'none'}}>
              <OfferMap city={currentCity} offers={offers} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
