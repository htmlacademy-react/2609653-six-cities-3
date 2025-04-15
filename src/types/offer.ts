import { City, OfferPoint } from './city';
import { MapPoint } from './mapPoint';

export type Offer = {
    id: string;
    title: string;
    type: 'apartment' | 'room' | 'house' | 'hotel';
    price: number;
    city: City;
    location: MapPoint;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
};


export type OfferOld = {
    id: number;
    uid?: string;
    title: string;
    type: 'apartment' | 'room' | 'house' | 'hotel';
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
