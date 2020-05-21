import React, { Component } from "react";
import ListMoviesItem from "./ListMoviesItem";
import { connect } from "react-redux";
import Pagination from '../../commons/Pagination';

class ListMovies extends Component {
  render() {
    const { moviesSearch } = this.props;
    const { movies } = this.props;
    console.log(movies);
    
    const moviesResult = moviesSearch !== undefined ? moviesSearch : movies;
    
    return (
      <React.Fragment>
        <div className="content__right">
          {moviesResult.movies.map((movie) => (
            <ListMoviesItem movie={movie} key={movie.id} />
          ))}
        </div>
        <Pagination moviesResult={moviesResult} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.getMoviesReducer,
  };
};

export default connect(mapStateToProps, null)(ListMovies);
