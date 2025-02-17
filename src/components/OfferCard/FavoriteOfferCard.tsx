import { Link } from 'react-router-dom';
import { IMG_FOLDER, MAX_RATING_VALUE } from '../../const';
import { Offer } from '../../types/offer';

type FavoriteOfferCardProps = Offer;
export default function FavoriteOfferCard(props: FavoriteOfferCardProps) {
  return(
    <article className="favorites__card place-card">
      {props.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${props.id}`}>
          <img className="place-card__image" src={`${IMG_FOLDER}/${props.imgSrc}`} width="150" height="110" alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;{props.period}</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${(props.rating / MAX_RATING_VALUE * 100).toFixed()}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{props.title}</a>
        </h2>
        <p className="place-card__type">{props.accomodation}</p>
      </div>
    </article>
  );
}
