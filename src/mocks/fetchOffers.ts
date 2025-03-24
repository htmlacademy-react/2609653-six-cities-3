import { City } from '../types/city';
import { Offer } from '../types/offer';
import { offersStore } from './offers-full';

export const fetchOffers = (city: City, limit: number = 20) => {
  let count = 0;
  return offersStore.filter((ofr) => {
    if (ofr.city.name === city.name && count < limit) {
      count++;
      return true;
    }
    return false;
  }).map((o, i) => <Offer>{
    id: i,
    uid: o.id,
    title: o.title,
    type: o.type,
    price: o.price,
    period: 'night',
    rating: o.rating,
    isPremium: o.isPremium,
    imgSrc: o.previewImage,
    coords: { lat: o.location.latitude, lng: o.location.longitude }
  });
};
