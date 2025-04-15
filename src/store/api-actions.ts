import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { AppDispatch, State } from '../types/state';
import { Offer } from '../types/offer';
import { loadOffers, setLoading } from './action';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'data/loadOffers',
  async (_arg, { dispatch, getState, extra: api }) => {
    dispatch(setLoading(true));
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    const city = getState().city;
    dispatch(loadOffers(data.filter((ofr) => (ofr.city.name === city.name))));
  },
);
