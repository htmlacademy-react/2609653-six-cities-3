import { offersExample } from '../mocks/offers';
import { dataSlice } from './dataSlice';
import { fetchOffersAction } from './thunks/offer-actions';

describe('Data Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      offers: [],
      isLoading: false,
      hasError: false
    };

    const result = dataSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      offers: [],
      isLoading: false,
      hasError: false
    };

    const result = dataSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should set "isLoading" to "true", "hasError" to "false" with "fetchOffersAction.pending"', () => {
    const expectedState = {
      offers: [],
      isLoading: true,
      hasError: false,
    };

    const result = dataSlice.reducer(undefined, fetchOffersAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "offers" to array with offer, "isLoading" to "false" with "fetchOffersAction.fulfilled"', () => {
    const expectedState = {
      offers: offersExample,
      isLoading: false,
      hasError: false,
    };

    const result = dataSlice.reducer(undefined,
      fetchOffersAction.fulfilled(offersExample, '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "isLoading" to "true", "hasError" to "true" with "fetchOffersAction.rejected', () => {
    const expectedState = {
      offers: [],
      isLoading: false,
      hasError: true,
    };

    const result = dataSlice.reducer(
      undefined,
      fetchOffersAction.rejected
    );

    expect(result).toEqual(expectedState);
  });
});
