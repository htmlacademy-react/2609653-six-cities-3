import Spinner from '../components/layout/spinner';

function LoadingPage() {
  return(
    <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}} data-testid="loading-page">
      <Spinner />
    </div>
  );
}
export default LoadingPage;
