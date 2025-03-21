import { City2 } from '../types/city';
import { Offer } from '../types/offer';
import { cities } from '../mocks/cities';
import { offersStore } from '../mocks/offers-full';
import { OFFER_LIMIT_DEFFAULT } from '../const';

interface OffersState {
    city: City2;
    offers: Offer[];
}

const enum ActionType {
    SetCity = 'offers/setCity'
}

const setCity = (city: City2) => ({
  type: ActionType.SetCity,
  payload: city
});

const fetchOffers = (city: City2, limit: number = 20) => {
  let count = 0;
  return offersStore.filter((ofr) => {
    if (ofr.city.name === city.name && count < limit) {
      count++;
      return true;
    }
    return false;
  }).map((o) => <Offer>{
    uid: o.id,
    title: o.title,
    accomodationType: o.type,
    price: o.price, period: 'night',
    rating: o.rating,
    isPremium: o.isPremium,
    imgSrc: o.previewImage,
    coords: { lat: o.location.latitude, lng: o.location.longitude }
  });
};

const initialState: {
    city: City2;
    offers: Offer[];
} = { city: cities[0], offers: fetchOffers(cities[0], OFFER_LIMIT_DEFFAULT) };

function reducer(state: OffersState = initialState, action: { payload: unknown; type: ActionType }) {
  switch (action.type) {
    case ActionType.SetCity: {
      const currentCity = action.payload as City2;
      return {
        city: currentCity,
        offers: fetchOffers(currentCity, OFFER_LIMIT_DEFFAULT)
      };
    }
    default:
      return state;
  }
}

export { reducer, setCity };
