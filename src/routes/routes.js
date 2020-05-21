import React from 'react';
import Movies from '../pages/Movies/Movies';
import ResultSearchMovies from '../pages/Movies/ResultSearchMovies';
import MovieDetails from '../pages/MovieDetails/MovieDetails';

const routes = [
  {
    path: "/",
    exact: true,
    main: ({ history }) => <Movies history={history} />
  },
  {
    path: "/search/:value",
    exact: true,
    main: ({ history }) => <ResultSearchMovies history={history} />
  },
  {
    path: "/movie/:movie_id",
    exact: true,
    main: () => <MovieDetails />
  }
]

export default routes;