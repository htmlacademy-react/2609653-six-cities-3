import { City } from '../types/city';
import { Offer } from '../types/offer';
import { cities } from '../mocks/cities';
import { offersInitial } from '../mocks/offers-init';
import { OffersState } from '../types/offerState';
import { ActionType } from './action';

const initialState: OffersState = { city: cities[0], offers: offersInitial };

function reducer(state: OffersState = initialState, action: { payload: unknown; type: ActionType }) {
  switch (action.type) {
    case ActionType.SetCity: {
      return {
        city: action.payload as City,
        offers: []
      };
    }

    case ActionType.Assign: {
      return {
        city: state.city,
        offers: action.payload as Offer[]
      };
    }

    default:
      return state;
  }
}

export { reducer };
