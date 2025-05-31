import { AuthorizationStatus } from '../const';
import { AMSTERDAM } from '../mocks/city';
import { offersExample } from '../mocks/offers';
import { getAuthCheckedStatus, getAuthorizationStatus, getCurrentCity, getCurrentOffers, getDataLoading, getErrorStatus, getErrorText, getUserData } from './selectors';

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

describe('UserState selectors', () => {
  const state = {
    'user': {
      authorizationStatus: AuthorizationStatus.NoAuth,
      userData: {
        id: 112,
        email: 'volgavr112@emaill.ru',
        token: 'abcxso90',
        avatarUrl: '',
        isPro: false },
    }
  };

  it('should return authorization status from state', () => {
    const status = getAuthorizationStatus(state);
    expect(status).toBe(state.user.authorizationStatus);
    const checked = getAuthCheckedStatus(state);
    expect(checked).toBe(true);
  });

  it('should return error text state', () => {
    const result = getUserData(state);
    expect(result).toEqual(state.user.userData);
  });
});

describe('DataState selectors', () => {
  const state = {
    'data': {
      offers: offersExample,
      isLoading: false,
      hasError: true
    }
  };

  it('should return offers from state', () => {
    const result = getCurrentOffers(state);
    expect(result).toBe(state.data.offers);
  });

  it('should return loading and error statuses from state', () => {
    const result = getDataLoading(state);
    expect(result).toEqual(state.data.isLoading);

    const checked = getErrorStatus(state);
    expect(checked).toBe(true);
  });
});
