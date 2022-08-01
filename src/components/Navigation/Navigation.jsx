import { Link, List } from './Naigation.styled.js';

export const Navigation = () => {
  return (
    <header>
      <nav>
        <List>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </List>
      </nav>
    </header>
  );
};
