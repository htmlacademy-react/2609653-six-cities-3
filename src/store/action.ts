import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';

export const selectCity = createAction<City>('mainScreen/changeCity');
export const setLoading = createAction<boolean>('mainScreen/setLoading');
export const loadOffers = createAction<Offer[]>('data/loadOffers');
