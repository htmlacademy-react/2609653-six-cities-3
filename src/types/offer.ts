import { OfferPoint } from './city';

export type Offer = {
    id: number;
    uid?: string;
    title: string;
    accomodationType: 'apartment' | 'room' | 'house' | 'hotel';
    price: number;
    period: 'night';
    rating: number;
    isPremium: boolean;
    imgSrc: string;
    coords: OfferPoint | null;
};

export type OfferList = {
    offers: Offer[];
};
