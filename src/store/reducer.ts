import { cities } from '../mocks/cities';
import { OffersState } from '../types/offerState';
import { assignOffers, selectCity } from './action';
import { createReducer } from '@reduxjs/toolkit';

const initialState: OffersState = { city: cities[0], offers: [] };

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(assignOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export { reducer };
