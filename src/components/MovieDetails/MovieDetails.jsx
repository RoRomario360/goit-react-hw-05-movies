import { getDetailsMovies } from '../../servise/service.js';
import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getDetailsMovies(movieId).then(data => setDetails(data));
  }, [movieId]);

  return (
    <>
      {details && (
        <div>
          <button type="button">Go Back</button>
          <h2>{details.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
            alt="poster"
            width="300"
          />
          <h3>Overview</h3>
          <p>{details.overview}</p>
          <h3>Genres</h3>
          <p>{details.genres.map(item => item.name).join(', ')}</p>
          <h3>Additional information</h3>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
          <Outlet />
        </div>
      )}
    </>
  );
};
