/* eslint-disable indent */
import { useEffect, useState } from 'react';
import { Offer } from '../../types/offer';
import OfferCard from '../OfferCard/OfferCard';

type OfferListProps = {
    offers: Offer[];
}

export default function OfferList({ offers }: OfferListProps) {
    const [activeId, setActiveId] = useState<number | null>(null);
    useEffect(()=>{
        console.log(activeId);
}, [activeId]);
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


