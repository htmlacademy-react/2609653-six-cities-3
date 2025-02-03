import Header from './Header/Header';
import Main from './Main/Main';

type PageLayoutProps = { totalPlacesCount: number }

function PageLayout({totalPlacesCount} : PageLayoutProps) {
  return(
    <div className="page page--gray page--main">
      <Header />
      <Main placesCount={totalPlacesCount} />
    </div>
  );
}

export default PageLayout;
