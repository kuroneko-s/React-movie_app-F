import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = ({ id, title, year, summary, poster, genres }) => {
  return (
    <div className="movie">
      <img className="movie__poster" src={poster} />
      <div className="movie__description">
        <h1 className="movie__title">{title}</h1>
        <h4 className="movie__year">{year}</h4>
        <ul className="movie__genres">
          {genres[0] !== 'undefined'
            ? genres.map((genre, index) => {
                return <li key={index}>{genre}</li>;
              })
            : ''}
        </ul>
        <h5 className="movie__summary">{summary.slice(0, 140) + '...'}</h5>
      </div>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
