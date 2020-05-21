import React, { Component } from "react";
import ListMovies from "../../components/Movies/ListMovies";
import { connect } from "react-redux";
import { searchMovies } from "../../stores/actions/index";
import EmptyData from "../../components/Movies/EmptyData";
import Spinner from "../../commons/Spinner";
import { withRouter } from "react-router-dom";
import InputSearchMovie from "../../components/Movies/InputSearchMovie";
import ButtonBack from "../../commons/ButtonBack";

class ResultSearchMovies extends Component {
  componentDidMount() {
    const { value } = this.props.match.params;
    this.props.dispatchSearchMovies(value);
  }

  handleGoBack = () => {
    this.props.history.goBack();
  };

  renderResult = (movies) => {
    return (
      <React.Fragment>
        <ButtonBack goBack={this.handleGoBack} />
        <section className="inner_content">
          <div className="container inner_content__wrapper">
            <div className="content">
              <div className="search">
                <h2 className="content__title">Search Results</h2>
                <InputSearchMovie />
              </div>
              {movies.movies.length !== 0 ? (
                <ListMovies moviesSearch={movies} />
              ) : (
                <EmptyData />
              )}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  };

  render() {
    const { movies } = this.props;
    const { isSearchSuccess } = movies;

    return (
      <div className="main">
        {!isSearchSuccess ? <Spinner /> : this.renderResult(movies)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.searchMoviesReducer,
  };
};

export default connect(mapStateToProps, {
  dispatchSearchMovies: (value) => searchMovies(value),
})(withRouter(ResultSearchMovies));
