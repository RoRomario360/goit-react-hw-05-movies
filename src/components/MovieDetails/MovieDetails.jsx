import { getDetailsMovies } from '../../servise/service.js';
import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { FilmTitle, InfoWrapper, Wrapper } from './MovieDetails.styled.js';

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const { movieId } = useParams();

  //
  const location = useLocation();
  const navigate = useNavigate();
  //

  useEffect(() => {
    getDetailsMovies(movieId).then(data => setDetails(data));
  }, [movieId]);

  return (
    <>
      {details && (
        <div>
          <button
            type="button"
            onClick={() => navigate(location?.state?.from ?? '/')}
          >
            Go Back
          </button>
          <Wrapper>
            <div>
              <FilmTitle>{details.title}</FilmTitle>
              <img
                src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                alt="poster"
                width="300"
              />
            </div>
            <InfoWrapper>
              <h3>Overview</h3>
              <p>{details.overview}</p>
              <h3>Genres</h3>
              <p>{details.genres.map(item => item.name).join(', ')}</p>
              <h3>Additional information</h3>
              <Link state={{ from: location?.state?.from ?? '/' }} to="cast">
                Cast
              </Link>
              <Link state={{ from: location?.state?.from ?? '/' }} to="reviews">
                Reviews
              </Link>
              <Outlet />
            </InfoWrapper>
          </Wrapper>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
