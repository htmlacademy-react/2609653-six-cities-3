import { render, screen } from '@testing-library/react';
import { withHistory } from '../mock-history-wrapper';
import OfferCard from './OfferCard';
import { offersExample } from '../../mocks/offers';

describe('Component: OfferCard', () => {
  it('should render correctly', () => {
    const imageContainerTestId = 'image-container';
    const priceValueTestId = 'price-value';
    const titleContainerTestId = 'title-container';
    const offer = offersExample[0];

    render(withHistory(<OfferCard {...offer} />));

    expect(screen.getByTestId(priceValueTestId)).toBeInTheDocument();
    expect(screen.getByTestId(titleContainerTestId)).toBeInTheDocument();
    expect(screen.getByTestId(imageContainerTestId)).toBeInTheDocument();

    const image = document.querySelector('img') as HTMLImageElement;
    expect(screen.getByTestId(imageContainerTestId)).toContainElement(image);
    expect(image.src).toContain(offer.previewImage);
  });
});
