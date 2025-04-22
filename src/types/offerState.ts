import { AuthorizationStatus } from '../const';
import { City } from './city';
import { Offer } from './offer';

export interface OffersState {
    city: City;
    offers: Offer[];
    loading: boolean;
    authorizationStatus: AuthorizationStatus;
    error: string | null;
}
