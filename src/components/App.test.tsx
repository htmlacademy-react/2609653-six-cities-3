import App from './App';
import { render, screen} from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import { withHistory } from './mock-history-wrapper';
import { withStore } from './mock-store-wrapper';
import { makeFakeStore } from '../mocks/utils';
import { AppRoute, AuthorizationStatus } from '../const';

describe('Application Routing', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render "MainScreen" when user navigate to "/"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    mockHistory.push(AppRoute.Main);

    render(withStoreComponent);

    expect(screen.getByTestId('page-main')).toBeInTheDocument();
  });

  it('should render "Login" when user navigate to "/login"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    mockHistory.push(AppRoute.Login);

    render(withStoreComponent);

    expect(screen.getByTestId('page-login')).toBeInTheDocument();

  });

  it('should render "Offer" when user navigate to "/offer"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    mockHistory.push(AppRoute.Offer);

    render(withStoreComponent);

    expect(screen.getByTestId('page-offer')).toBeInTheDocument();

  });

  it('should render "Favorites" when user navigate to "/favorites"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      user: { authorizationStatus: AuthorizationStatus.Auth }
    }));
    mockHistory.push(AppRoute.Favorites);

    render(withStoreComponent);
    expect(screen.getByTestId('page-favorites')).toBeInTheDocument();

  });

  it('should render "NotFoundPage" when user navigate to non-existent route', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    const unknownRoute = '/unknown-route';
    mockHistory.push(unknownRoute);

    render(withStoreComponent);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('Вернуться на главную!')).toBeInTheDocument();
  });
});
