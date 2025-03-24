import { City } from '../types/city';
import { Offer } from '../types/offer';

const enum ActionType {
    SetCity = 'offers/setCity',
    Assign = 'offers/assign'
}

const setCity = (city: City) => ({
  type: ActionType.SetCity,
  payload: city
});

const assignOffers = (offers: Offer[]) => ({
  type: ActionType.Assign,
  payload: offers
});

export { ActionType, setCity, assignOffers };
