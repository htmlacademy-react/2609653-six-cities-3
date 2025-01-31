import Header from './Header/Header';
import Main from './Main/Main';

function PageLayout({totalPlacesCount} : { totalPlacesCount: number }) {
  return(
    <div className="page page--gray page--main">
      <Header />
      <Main placesCount={totalPlacesCount} />
    </div>
  );
}

export default PageLayout;
