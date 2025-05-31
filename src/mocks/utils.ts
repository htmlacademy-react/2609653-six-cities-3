import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { createAPI } from '../services/api';
import { State } from '../types/state';
import { AuthorizationStatus } from '../const';
import { AMSTERDAM } from './city';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

export const makeFakeStore = (initialState?: Partial<State>): State => ({
  user: { authorizationStatus: AuthorizationStatus.NoAuth },
  data: { isLoading: false, offers: [], hasError: false },
  mainScreen: { city: AMSTERDAM, error: null },
  ...initialState ?? {},
});
