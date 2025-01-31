import PageLayout from './layout/PageLayout';

function App({totalPlacesCount}: { totalPlacesCount : number}) {
  return (
    <PageLayout totalPlacesCount={totalPlacesCount} />
  );
}

export default App;
