import {Link} from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="page__404">
      <h1>404. Page not found</h1>
      <p>Кажется, вы заблудились...</p>
      <Link to="/">Вернуться на главную!</Link>
    </section>
  );
}

export default NotFoundPage;
