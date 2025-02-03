import PageLayout from './Layout/PageLayout';
type AppProps = { totalPlacesCount : number }

function App({totalPlacesCount}: AppProps) {
  return (
    <PageLayout totalPlacesCount={totalPlacesCount} />
  );
}

export default App;
