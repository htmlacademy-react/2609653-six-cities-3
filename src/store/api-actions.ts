import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiRoute, AppRoute, AuthorizationStatus } from '../const';
import { AppDispatch, State } from '../types/state';
import { Offer } from '../types/offer';
import { loadOffers, redirectToRoute, requireAuthorization, setLoading } from './action';
import { AuthData, UserData } from '../types/userData';
import { dropUserData, saveUserData } from '../services/userData';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'data/loadOffers',
  async (_arg, { dispatch, getState, extra: api }) => {
    dispatch(setLoading(true));
    const { data } = await api.get<Offer[]>(ApiRoute.Offers);
    dispatch(setLoading(false)); //Запрос уже завершился, крутилку можно убрать

    const city = getState().city;
    dispatch(loadOffers(data.filter((ofr) => (ofr.city.name === city.name))));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(ApiRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ username: email, password }, { dispatch, extra: api }) => {
    const { data: { token, avatarUrl } } = await api.post<UserData>(ApiRoute.Login, { email, password });
    saveUserData({token, email, avatarUrl} as UserData); //saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(ApiRoute.Logout);
    dropUserData();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
