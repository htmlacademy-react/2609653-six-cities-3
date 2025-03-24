import { useAppDispatch } from '../../hooks';
import { setCity } from '../../store/action';
import { City } from '../../types/city';

type CityListProps = {
    items: City[];
    cityId?: string;
};

export default function CityList({ items, cityId }: CityListProps) {
  const dispatch = useAppDispatch();

  if (items.length === 0) {
    return (<span>Список пуст</span>);
  }
  return (
    <ul className="locations__list tabs__list">
      {
        items.map((c) =>
          (
            <li key={c.id} className="locations__item">
              <a className={`locations__item-link tabs__item${cityId === c.id ? ' tabs__item--active' : ''}` } href={`#${c.id}`} onClick={() => dispatch(setCity(c))}>
                <span>{c.name}</span>
              </a>
            </li>
          )
        )
      }
    </ul>);
}
