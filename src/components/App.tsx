import PageLayout from './Layout/PageLayout';

function App({totalPlacesCount}: { totalPlacesCount : number}) {
  return (
    <PageLayout totalPlacesCount={totalPlacesCount} />
  );
}

export default App;
