import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getMovieDetails } from "../../stores/actions/index";
import ListCast from "../../components/MovieDetails/ListCars";
import DetailsMovie from "../../components/MovieDetails/DetailsMovie";
import Videos from "../../components/MovieDetails/Videos";
import ButtonBack from "../../commons/ButtonBack";

class MovieDetails extends Component {
  componentDidMount() {
    const id = this.props.match.params.movie_id;
    this.props.dispatchGetMovieDetails(id);
  }

  handleGoBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { movieDetails } = this.props.movieDetails;
    const { genres } = movieDetails;
    const traillerMovies = movieDetails.videos;
    const { credits } = movieDetails;

    return (
      <div className="main">
        <section
          className="wrapper-details"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movieDetails.backdrop_path})`,
          }}
        >
          <ButtonBack goBack={this.handleGoBack} />
          <DetailsMovie
            movieDetails={movieDetails}
            genres={genres}
            traillerMovies={traillerMovies}
          />
        </section>
        <ListCast credits={credits} />
        <Videos />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieDetails: state.getMovieDetailsReducer,
  };
};

export default connect(mapStateToProps, {
  dispatchGetMovieDetails: (id) => getMovieDetails(id),
})(withRouter(MovieDetails));
