import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header/Header';
import { AppRoute } from '../../const';

function PageLayout() {
  const location = useLocation();
  return(
    <div className={`page page--gray ${location.pathname === AppRoute.Login as string ? 'page--login' : 'page--main'}`}>
      <Header />
      <Outlet />
    </div>
  );
}

export default PageLayout;
