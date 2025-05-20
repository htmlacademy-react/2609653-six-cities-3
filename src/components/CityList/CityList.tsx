import React from 'react';
import { useAppDispatch } from '../../hooks';
import { City } from '../../types/city';
import { selectCity } from '../../store/mainScreenSlice';

type CityListProps = {
    items: City[];
    cityName?: string;
};

function CityList({ items, cityName }: CityListProps) {
  const dispatch = useAppDispatch();

  if (items.length === 0) {
    return (<span>Список пуст</span>);
  }
  return (
    <ul className="locations__list tabs__list">
      {
        items.map((c) =>
          (
            <li key={c.name.toLowerCase()} className="locations__item">
              <a className={`locations__item-link tabs__item${cityName === c.name ? ' tabs__item--active' : ''}` } href={`#${c.name.toLowerCase()}`} onClick={() => dispatch(selectCity(c))}>
                <span>{c.name}</span>
              </a>
            </li>
          )
        )
      }
    </ul>);
}

export default React.memo(CityList);
