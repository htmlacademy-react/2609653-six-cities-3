import { AMSTERDAM } from '../mocks/city';
import { getCurrentCity, getErrorText } from './selectors';

describe('MainScreenState selectors', () => {
  const state = {
    'mainScreen': {
      city: AMSTERDAM,
      error: 'access denied',
    }
  };

  it('should return city from state', () => {
    const city = getCurrentCity(state);
    expect(city).toEqual(state.mainScreen.city);
  });

  it('should return error text state', () => {
    const result = getErrorText(state);
    expect(result).toBe(state.mainScreen.error);
  });
});
