import { State } from '../types/state';
import { AuthorizationStatus } from '../const';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { UserData } from '../types/user-data';

export const getAuthorizationStatus = (state: Pick<State, 'user'>): AuthorizationStatus => state['user'].authorizationStatus;
export const getAuthCheckedStatus = (state: Pick<State, 'user'>): boolean => state['user'].authorizationStatus !== AuthorizationStatus.Unknown;
export const getCurrentCity = (state: Pick<State, 'mainScreen'>): City => state['mainScreen'].city;
export const getCurrentOffers = (state: Pick<State, 'data'>): Offer[] => state['data'].offers;
export const getDataLoading = (state: Pick<State, 'data'>): boolean => state['data'].isLoading;
export const getUserData = (state: Pick<State, 'user'>): UserData | undefined => state['user'].userData;
export const getErrorText = (state: Pick<State, 'mainScreen'>): string | null => state['mainScreen'].error;
export const getErrorStatus = (state: Pick<State, 'data'>): boolean => state['data'].hasError;
