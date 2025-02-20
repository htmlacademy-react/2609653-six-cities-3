import { useState } from 'react';
import OfferCard from '../OfferCard/OfferCard';
import { OfferList as OfferListProps } from '../../types/offer';

export default function OfferList({ offers }: OfferListProps) {
  const [, setActiveId] = useState<number | null>(null);

  if (offers.length === 0) {
    return (<p>Список пуст</p>);
  }
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((ofr) =>
          (
            <OfferCard {...ofr} key={ofr.id} setActiveId={setActiveId} />
          )
        )
      }
    </div>);
}


