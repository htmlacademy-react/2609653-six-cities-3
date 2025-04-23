export const MAX_RATING_VALUE = 5;
export const IMG_FOLDER = 'img';

export enum AppRoute {
    Login = '/login',
    Favorites = '/favorites',
    Offer = '/offer/:id',
    Main = '/',
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}


export enum ApiRoute {
    Offers = '/offers',
    Login = '/login',
    Logout = '/logout',
}

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
export const MAP_ZOOM_DEFAULT = 10;
export const OFFER_LIMIT_DEFFAULT = 6;
export const AUTH_TOKEN_KEY_NAME = 'six-cities-token';
export const USER_EMAIL_KEY_NAME = 'user-email';
export const USER_IMAGE_KEY_NAME = 'user-image-url';
