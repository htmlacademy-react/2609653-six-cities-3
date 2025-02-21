import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    id: 1205,
    title: 'Beautiful & luxurious apartment at great location',
    accomodation: 'apartment',
    price: 120,
    period: 'night',
    rating: 4,
    isPremium: true,
    imgSrc: 'apartment-01.jpg',
  },
  {
    id: 1709,
    title: 'Wood and stone place',
    accomodation: 'room',
    price: 80,
    period: 'night',
    rating: 4,
    isPremium: false,
    imgSrc: 'room.jpg',
  },
  {
    id: 2354,
    title: 'Canal View Prinsengracht',
    accomodation: 'apartment',
    price: 132,
    period: 'night',
    rating: 4,
    isPremium: false,
    imgSrc: 'apartment-02.jpg',
  },
  {
    id: 8871,
    title: 'Nice, cozy, warm big bed apartment',
    accomodation: 'apartment',
    price: 180,
    period: 'night',
    rating: 5,
    isPremium: true,
    imgSrc: 'apartment-03.jpg',
  },
  {
    id: 5536,
    title: 'Wood and stone place (2)',
    accomodation: 'room',
    price: 80,
    period: 'night',
    rating: 4,
    isPremium: false,
    imgSrc: 'room.jpg',
  }
];

export const favoriteOffers: Offer[] = [
  {
    id: 1709,
    title: 'Wood and stone place',
    accomodation: 'room',
    price: 80,
    period: 'night',
    rating: 4,
    isPremium: false,
    imgSrc: 'room-small.jpg',
  },
  {
    id: 8871,
    title: 'Nice, cozy, warm big bed apartment',
    accomodation: 'apartment',
    price: 180,
    period: 'night',
    rating: 5,
    isPremium: true,
    imgSrc: 'apartment-small-03.jpg',
  },
];
