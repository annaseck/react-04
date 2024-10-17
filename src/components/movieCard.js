// import React from 'react';

// const MovieCard = ({ movie }) => {
//   return (
//     <div className="movie-card">
//       <img src={movie.posterURL} alt={movie.title} />
//       <h2>{movie.title}</h2>
//       <p>{movie.description}</p>
//       <p>Note: {movie.rating}/5</p>
//     </div>
//   );
// };

// export default MovieCard;

import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Note: {movie.rating}/5</p>
      <Link to={`/movie/${movie.title}`}>Voir plus</Link>
    </div>
  );
};

export default MovieCard;

