import { render, screen } from '@testing-library/react';
import LoadingPage from './loading';
import { withHistory } from '../components/mock-history-wrapper';

describe('Component: Loading page', () => {
  it('should render correct', () => {
    render(withHistory(<LoadingPage />));

    const page = screen.getByTestId('loading-page');
    const spinner = screen.getByTestId('spinner');

    expect(page).toContainElement(spinner);
  });
});
