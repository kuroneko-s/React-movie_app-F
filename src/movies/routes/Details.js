import React, { useEffect } from 'react';

const Details = ({ location, history }) => {
  console.log(location.state);
  useEffect(() => {
    if (location.state === undefined) {
      history.push('/');
    }
  }, []);
  const { poster, title, year, genres, summary } = location.state;
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

export default Details;
