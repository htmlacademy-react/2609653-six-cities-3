import { Fragment } from 'react';
import { Review } from '../../types/review';
import { IMG_FOLDER, MAX_RATING_VALUE } from '../../const';

type ReviewDisplayProps = Review;

export default function ReviewDisplay(props: ReviewDisplayProps) {
  return (
    <Fragment>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={`${IMG_FOLDER}/${props.avatarSrc}`} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{props.userName}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${(props.rating / MAX_RATING_VALUE * 100).toFixed()}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{props.text}
        </p>
        <time className="reviews__time" dateTime={props.date}>{props.date}</time>
      </div>
    </Fragment>
  );
}
