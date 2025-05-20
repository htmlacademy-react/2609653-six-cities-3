import { createSlice } from '@reduxjs/toolkit';
import { DataState } from '../types/state';
import { fetchOffersAction } from './thunks/offer-actions';

const initialState: DataState = {
  offers: [],
  isLoading: false,
  hasError: false
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  }
});
