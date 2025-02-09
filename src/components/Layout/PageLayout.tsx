import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

function PageLayout() {
  return(
    <div className="page page--gray page--main">
      <Header />
      <Outlet />
    </div>
  );
}

export default PageLayout;
