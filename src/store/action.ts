import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';

//export const selectCity = createAction<City>('mainScreen/changeCity');
//export const setLoading = createAction<boolean>('mainScreen/setLoading');
//export const loadOffers = createAction<Offer[]>('data/loadOffers');
//export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
//export const setError = createAction<string | null>('app/setError');
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
