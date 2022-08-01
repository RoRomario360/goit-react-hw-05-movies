import { useState, useEffect } from 'react';
import { getPoPMovies } from '../servise/service.js';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const getFilms = () => {
      getPoPMovies().then(data => setFilms(data.results));
    };
    getFilms();
  }, []);

  return (
    <>
      <ul>
        {films.map(({ id, title, original_name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title || original_name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
