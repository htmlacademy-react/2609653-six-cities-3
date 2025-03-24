export type City = {
    id: string;
    name: string;
    location?: MapPoint;
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

