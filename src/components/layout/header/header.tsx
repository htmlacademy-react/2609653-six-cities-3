import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { logoutAction } from '../../../store/thunks/user-actions';
import { getUserEmail, getUserImageUrl } from '../../../services/user-data';
import { getAuthorizationStatus } from '../../../store/selectors';
import Avatar from './avatar';

function Header() {
  const authStatus = useAppSelector(getAuthorizationStatus);
  const location = useLocation();
  const dispatch = useAppDispatch();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {location.pathname !== (AppRoute.Login as string) &&
          <nav className="header__nav">
            {authStatus === AuthorizationStatus.Auth ?
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <Avatar src={getUserImageUrl()} />
                    <span className="header__user-name user__name">{getUserEmail()}</span>
                    <span className="header__favorite-count">0</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#" onClick={(evt) => {
                    evt.preventDefault();
                    dispatch(logoutAction());
                  }}
                  >
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul> :
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>}
          </nav>}
        </div>
      </div>
    </header>
  );
}

export default Header;
