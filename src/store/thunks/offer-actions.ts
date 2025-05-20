import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../const';

export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'data/loadOffers',
  async (_arg, { getState, extra: api }) => {
    //dispatch(setLoading(true));
    const { data } = await api.get<Offer[]>(ApiRoute.Offers);
    //dispatch(setLoading(false)); //Запрос уже завершился, крутилку можно убрать
    const city = getState().mainScreen.city;
    //dispatch(loadOffers(data.filter((ofr) => (ofr.city.name === city.name))));
    return data.filter((ofr) => (ofr.city.name === city.name));
  },
);
