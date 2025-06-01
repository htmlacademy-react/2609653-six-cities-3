import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import axios from 'axios';
import { State } from '../../types/state';
import { AppThunkDispatch, extractActionsTypes } from '../../mocks/utils';
import { ApiRoute, AuthorizationStatus } from '../../const';
import { checkAuthAction, loginAction, logoutAction } from './user-actions';
import { AuthData, UserData } from '../../types/user-data';
import { redirectToRoute } from '../action';
import * as userDataStorage from '../../services/user-data';

describe('Tests Async actions', () => {
  const axiosInstance = axios.create();
  const mockAxiosAdapter = new MockAdapter(axiosInstance);
  const middleware = [thunk.withExtraArgument(axiosInstance)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({
      mainScreen: { city: { name: 'Amsterdam' } },
      data: { offers: [], isLoading: false, hasError: false },
      user: { authorizationStatus: AuthorizationStatus.Unknown }
    });
  });

  describe('checkAuthAction', () => {
    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.fulfilled" with thunk "checkAuthAction', async () => {
      mockAxiosAdapter.onGet(ApiRoute.Login).reply(200);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.fulfilled.type,
      ]);
    });

    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(ApiRoute.Login).reply(400);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.rejected.type,
      ]);
    });
  });

  describe('loginAction', () => {
    it('should dispatch "loginAction.pending", "redirectToRoute", "loginAction.fulfilled" when server response 200', async () => {
      const fakeUser: AuthData = { username: 'volgavr@test.ru', password: '123456' };
      const fakeServerReplay = { token: 'secret' };
      mockAxiosAdapter.onPost(ApiRoute.Login).reply(200, fakeServerReplay);

      await store.dispatch(loginAction(fakeUser));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        redirectToRoute.type,
        loginAction.fulfilled.type,
      ]);
    });

    it('should call "saveUserData" once with the received UserData', async () => {
      const fakeUser: AuthData = { username: 'volgavr@test.ru', password: '123456' };
      const fakeServerReplay: UserData = { id: 1838, email: 'volgavr@test.ru', token: 'secret', avatarUrl: '', isPro: false };
      mockAxiosAdapter.onPost(ApiRoute.Login).reply(200, fakeServerReplay);
      const mockSaveData = vi.spyOn(userDataStorage, 'saveUserData');

      await store.dispatch(loginAction(fakeUser));

      expect(mockSaveData).toBeCalledTimes(1);
      expect(mockSaveData).toBeCalledWith({ token: fakeServerReplay.token, email: fakeServerReplay.email, avatarUrl: fakeServerReplay.avatarUrl });
    });

  });

  describe('logoutAction', () => {
    it('should dispatch "logoutAction.pending", "logoutAction.fulfilled" when server response 204', async () => {
      mockAxiosAdapter.onDelete(ApiRoute.Logout).reply(204);

      await store.dispatch(logoutAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        logoutAction.pending.type,
        logoutAction.fulfilled.type,
      ]);
    });

    it('should one call "dropUserData" with "logoutAction"', async () => {
      mockAxiosAdapter.onDelete(ApiRoute.Logout).reply(204);
      const mockDropToken = vi.spyOn(userDataStorage, 'dropUserData');

      await store.dispatch(logoutAction());

      expect(mockDropToken).toBeCalledTimes(1);
    });
  });

});
