import { useState, useEffect } from 'react';
import { getPoPMovies } from '../servise/service.js';
import { Link } from 'react-router-dom';
import { WrapperList, ListLink } from './Home.styled.js';

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
      <WrapperList>
        {films.map(({ id, title, original_name, poster_path }) => (
          <ListLink key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt="poster"
              width="300"
            />
            <Link to={`/movies/${id}`}>{title || original_name}</Link>
          </ListLink>
        ))}
      </WrapperList>
    </>
  );
};
