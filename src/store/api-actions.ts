import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiRoute, AppRoute, ERROR_DISPLAY_TIME } from '../const';
import { AppDispatch, State } from '../types/state';
//import { Offer } from '../types/offer';
import { redirectToRoute } from './action';
import { AuthData, UserData } from '../types/userData';
import { dropUserData, saveUserData } from '../services/userData';
import { setError } from './mainScreenSlice';
import { store } from '.';

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      ERROR_DISPLAY_TIME,
    );
  },
);
