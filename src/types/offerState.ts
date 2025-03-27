import { City } from './city';
import { Offer } from './offer';

export interface OffersState {
    city: City;
    offers: Offer[];
}
