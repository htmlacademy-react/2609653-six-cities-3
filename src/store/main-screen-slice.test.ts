import { cities } from '../mocks/cities';
import { AMSTERDAM } from '../mocks/city';
import { mainScreenSlice, selectCity, setError } from './main-screen-slice';

describe('Main Screen Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { city: cities[0], error: null };

    const result = mainScreenSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = { city: cities[0], error: null };

    const result = mainScreenSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should select current city step with "selectCity" action', () => {
    const initialState = { city: cities[0], error: null };
    const expectedCity = AMSTERDAM;

    const result = mainScreenSlice.reducer(initialState, selectCity(AMSTERDAM));

    expect(result.city).toEqual(expectedCity);
  });

  it('should set Error text with "setError" action', () => {
    const initialState = { city: cities[0], error: null };
    const expectedErrorText = 'Access denied';

    const result = mainScreenSlice.reducer(initialState, setError(expectedErrorText));

    expect(result.error).toBe(expectedErrorText);
  });

});
