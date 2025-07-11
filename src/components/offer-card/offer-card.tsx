import { Link } from 'react-router-dom';
import { MAX_RATING_VALUE } from '../../const';
import { Offer } from '../../types/offer';
import React from 'react';

export type OfferCardProps = Offer;

function OfferCard(props: OfferCardProps) {
  return (
    <>
      {props.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper" data-testid="image-container">
        <Link to={`/offer/${props.id}`}>
          <img className="place-card__image" src={props.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value" data-testid="price-value">&euro;{props.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${(props.rating / MAX_RATING_VALUE * 100).toFixed()}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" data-testid="title-container">
          <Link to={`/offer/${props.id}`}>{props.title}</Link>
        </h2>
        <p className="place-card__type">{props.type}</p>
      </div>
    </>
  );
}

export default React.memo(OfferCard);
