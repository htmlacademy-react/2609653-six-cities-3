export type Offer = {
    id: number;
    title: string;
    accomodation: 'apartment' | 'room';
    price: number;
    period: 'night';
    rating: number;
    isPremium: boolean;
    imgSrc: string;
};
