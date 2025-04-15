import { cities } from '../mocks/cities';
import { OffersState } from '../types/offerState';
import { loadOffers, selectCity, setLoading } from './action';
import { createReducer } from '@reduxjs/toolkit';

const initialState: OffersState = { city: cities[0], offers: [], loading: false };

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setLoading, (state, action) => {
      state.loading = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.loading = false;
    });
});

export { reducer };
