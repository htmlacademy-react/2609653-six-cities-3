import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { State } from 'history';
import { ApiRoute, AppRoute } from '../../const';
import { AppDispatch } from '../../types/state';
import { dropUserData, saveUserData } from '../../services/userData';
import { redirectToRoute } from '../action';
import { AuthData, UserData } from '../../types/userData';

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    await api.get(ApiRoute.Login);
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
    saveUserData({ token, email, avatarUrl } as UserData);
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(ApiRoute.Logout);
    dropUserData();
  },
);
