import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cities } from '../mocks/cities';
import { MainScreenState } from '../types/state';
import { City } from '../types/city';

const initialState: MainScreenState = {
  city: cities[0],
  error: null
};

export const mainScreenSlice = createSlice({
  name: 'mainScreen',
  initialState,
  reducers: {
    selectCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { selectCity, setError } = mainScreenSlice.actions;
