import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsItem } from './ReviewsItem';
import { getRewiesMovies } from 'servise/service';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getRewiesMovies(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <>
      {
        <ul>
          {reviews.length &&
            reviews.map(item => (
              <ReviewsItem
                key={item.id}
                name={item.author}
                text={item.content}
              ></ReviewsItem>
            ))}
        </ul>
      }
    </>
  );
};
