import { AuthorizationStatus } from '../const';
import { cities } from '../mocks/cities';
import { OffersState } from '../types/offerState';
import { loadOffers, requireAuthorization, selectCity, setError, setLoading } from './action';
import { createReducer } from '@reduxjs/toolkit';

const initialState: OffersState = { city: cities[0], offers: [], loading: false, authorizationStatus: AuthorizationStatus.Unknown, error: null };

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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
