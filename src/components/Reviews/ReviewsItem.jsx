import { PropTypes } from 'prop-types';

export const ReviewsItem = ({ name, text }) => {
  return (
    <>
      <li>
        <h3>{name}</h3>
        <p>{text}</p>
      </li>
    </>
  );
};

ReviewsItem.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
