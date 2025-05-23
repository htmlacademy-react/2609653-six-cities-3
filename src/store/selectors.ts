import { State } from '../types/state';
import { AuthorizationStatus } from '../const';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { UserData } from '../types/userData';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state['user'].authorizationStatus;
export const getAuthCheckedStatus = (state: State): boolean => state['user'].authorizationStatus !== AuthorizationStatus.Unknown;
export const getCurrentCity = (state: State): City => state['mainScreen'].city;
export const getCurrentOffers = (state: State): Offer[] => state['data'].offers;
export const getDataLoading = (state: State): boolean => state['data'].isLoading;
export const getUserData = (state: State): UserData | undefined => state['user'].userData;
export const getErrorText = (state: State): string | null => state['mainScreen'].error;
export const getErrorStatus = (state: State): boolean => state['data'].hasError;
