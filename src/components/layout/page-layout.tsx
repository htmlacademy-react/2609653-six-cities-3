import { Outlet, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import Header from './header/header';

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
