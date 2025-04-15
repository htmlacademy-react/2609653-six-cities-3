import { useAppDispatch } from '../../hooks';
import { selectCity } from '../../store/action';
import { City } from '../../types/city';

type CityListProps = {
    items: City[];
    cityName?: string;
};

export default function CityList({ items, cityName }: CityListProps) {
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
