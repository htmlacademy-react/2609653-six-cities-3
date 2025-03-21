import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    id: 1205,
    title: 'Beautiful & luxurious apartment at great location',
    accomodationType: 'apartment',
    price: 120,
    period: 'night',
    rating: 4,
    isPremium: true,
    imgSrc: 'apartment-01.jpg',
    coords: { lat: 52.3909553943508, lng: 4.85309666406198 }
  },
  {
    id: 1709,
    title: 'Wood and stone place',
    accomodationType: 'room',
    price: 80,
    period: 'night',
    rating: 4,
    isPremium: false,
    imgSrc: 'room.jpg',
    coords: { lat: 52.3609553943508, lng: 4.85309666406198 }
  },
  {
    id: 2354,
    title: 'Canal View Prinsengracht',
    accomodationType: 'apartment',
    price: 132,
    period: 'night',
    rating: 4,
    isPremium: false,
    imgSrc: 'apartment-02.jpg',
    coords: { lat: 52.3909553943508, lng: 4.929309666406198 }
  },
  {
    id: 8871,
    title: 'Nice, cozy, warm big bed apartment',
    accomodationType: 'apartment',
    price: 180,
    period: 'night',
    rating: 5,
    isPremium: true,
    imgSrc: 'apartment-03.jpg',
    coords: { lat: 52.3809553943508, lng: 4.939309666406198 }
  },
  {
    id: 5536,
    title: 'Wood and stone place (2)',
    accomodationType: 'room',
    price: 80,
    period: 'night',
    rating: 4,
    isPremium: false,
    imgSrc: 'room.jpg',
    coords: null
  }
];

export const favoriteOffers: Offer[] = [
  {
    id: 1709,
    title: 'Wood and stone place',
    accomodationType: 'room',
    price: 80,
    period: 'night',
    rating: 4,
    isPremium: false,
    imgSrc: 'room-small.jpg',
    coords: { lat: 52.3609553943508, lng: 4.85309666406198 }
  },
  {
    id: 8871,
    title: 'Nice, cozy, warm big bed apartment',
    accomodationType: 'apartment',
    price: 180,
    period: 'night',
    rating: 5,
    isPremium: true,
    imgSrc: 'apartment-small-03.jpg',
    coords: { lat: 52.3809553943508, lng: 4.939309666406198 }
  },
];
