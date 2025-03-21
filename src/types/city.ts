export type City = {
    title: string;
    lat: number;
    lng: number;
    zoom: number;
};

export type OfferPoint = {
    lat: number;
    lng: number;
};

type MapPoint = {
    lng: number;
    lat: number;
    zoom: number;
};

export type City2 = {
    id: string;
    name: string;
    location?: MapPoint;
};
