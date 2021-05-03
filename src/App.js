import React, { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Movie from './movies/Movie';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    setLoading(true);
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json');
    setMovies(movies);
    setLoading(false);
    console.log(movies);
  }, []);

  return (
    <section className="container">
      {loading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              genres={movie.genres ? movie.genres : ['undefined']}
              poster={movie.medium_cover_image}
              summary={movie.summary}
              year={movie.year}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default App;
