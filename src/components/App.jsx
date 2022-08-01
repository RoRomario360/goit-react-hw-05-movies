import { Routes, Route } from 'react-router';
import { Navigation } from './Navigation/Navigation';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';

export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
