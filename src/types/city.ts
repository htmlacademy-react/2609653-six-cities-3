import { MapPoint } from './map-point';

export type City = {
    id?: string;
    name: string;
    location?: MapPoint;
};

export type OfferPoint = {
    lat: number;
    lng: number;
};
