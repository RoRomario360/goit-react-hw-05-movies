import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router';
import { Loader } from './Loader/Loader';
import { Navigation } from './Navigation/Navigation';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { NotFoundView } from 'pages/NotFoundPage';
//FIXME:
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import { MovieDetails } from './MovieDetails/MovieDetails';

const Home = lazy(() => import('pages/Home' /* webpackChunkName: "Home" */));
const Movies = lazy(() =>
  import('pages/Movies' /* webpackChunkName: "Movies" */)
);
const MovieDetails = lazy(() =>
  import('./MovieDetails/MovieDetails' /* webpackChunkName: "MoviesDetails" */)
);

export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        ></Route>
        <Route
          path="/movies"
          element={
            <Suspense fallback={<Loader />}>
              <Movies />
            </Suspense>
          }
        ></Route>
        <Route
          path="/movies/:movieId"
          element={
            <Suspense fallback={<Loader />}>
              <MovieDetails />
            </Suspense>
          }
        >
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </div>
  );
};
