import { useAppDispatch } from '../../hooks';
import { setCity } from '../../store/reducer';
import { City2 } from '../../types/city';

type CityListProps = {
    items: City2[];
    selected?: string;
};

export default function CityList({ items, selected }: CityListProps) {
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
              <a className={`locations__item-link tabs__item${selected === c.id ? ' tabs__item--active' : ''}` } href={`#${c.id}`} onClick={() => dispatch(setCity(c))}>
                <span>{c.name}</span>
              </a>
            </li>
          )
        )
      }
    </ul>);
}
