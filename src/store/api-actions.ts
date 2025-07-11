import { createAsyncThunk } from '@reduxjs/toolkit';
import { ERROR_DISPLAY_TIME } from '../const';
import { setError } from './main-screen-slice';
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
