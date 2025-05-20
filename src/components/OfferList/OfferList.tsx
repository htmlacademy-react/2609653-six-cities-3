import OfferCard from '../OfferCard/OfferCard';
import { OfferList as OfferListProps } from '../../types/offer';
import React from 'react';

function OfferList({ offers, onCardHover }: OfferListProps) {

  if (offers.length === 0) {
    return (<p>Список пуст</p>);
  }
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((ofr) =>
          (
            <article key={ofr.id} className="cities__card place-card" onMouseOver={() => {
              onCardHover(ofr.id);
            }} onMouseOut={() => {
              onCardHover(null);
            }}
            >
              <OfferCard {...ofr} />
            </article>
          )
        )
      }
    </div>);
}

export default React.memo(OfferList);
