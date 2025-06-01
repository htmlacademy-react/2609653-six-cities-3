import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { City } from './city';
import { Offer } from './offer';
import { UserData } from './user-data';

export type AppState = {
    error: string | null;
}

export type MainScreenState = {
    city: City;
    error: string | null;
};

export type UserState = {
    authorizationStatus: AuthorizationStatus;
    userData?: UserData;
};

export type DataState = {
    offers: Offer[];
    isLoading: boolean;
    hasError: boolean;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
