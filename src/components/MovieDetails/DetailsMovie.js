import React, { Component } from "react";
import no_image from "../../assets/images/no_image.png";
import CircleProgressbar from "../../components/Movies/CircleProgressbar";
import RateStar from "../../components/Movies/RateStar";
import { connect } from "react-redux";
import { playVideo } from "../../stores/actions";

class DetailsMovie extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: 'tab1'
    }
  }

  handleButtonClick = (event) => {
    const { id } = event.target;
    this.props.dispatchPlayVideo(id);
  };

  select = (event) => {
    this.setState({
      selected: event.target.id
    })

    const element = document.getElementsByClassName('js-tablinks');
    for (var i = 0; i < element.length; i++) {
      var current = document.getElementsByClassName("active");
       current[0].className = current[0].className.replace(" active", "");
      event.target.className += " active";
    }
  }

  renderContents(movieDetails, genres, traillerMovies) {
    const { selected } = this.state
    if (selected === 'tab1') {
      return (
        <div className="movie-details__desc">
          <h2 className="movie-details__title">
            {movieDetails.original_title}
          </h2>
          <div className="movie-details__rate">
            <RateStar />
            <div className="progress">
              <CircleProgressbar movie={movieDetails} />
            </div>
          </div>
          <p className="movie-details__date">
            Release date: {movieDetails.release_date}
          </p>
          <p className="movie-details__vote movie-details__text">
            Vote Counts: {movieDetails.vote_count}
          </p>
          <p className="movie-details__genres movie-details__text">
            Genres:{" "}
            {genres !== undefined
              ? genres.map((gens) => (
                <span className="" key={gens.id}>
                  {gens.name},{" "}
                </span>
              ))
              : null}
          </p>
          <p className="movie-details__runtime movie-details__text">
            Time: {movieDetails.runtime} minutes
                  </p>
        </div>
      )
    } else if (selected === 'tab2') {
      return (
        <div className="info">
          <div className="info__overview">
            <h4 className="info__title">Overview</h4>
            <p className="info__desc">{movieDetails.overview}</p>
          </div>
        </div>
      )
    } else if (selected === 'tab3') {
      return (
        <div className="trailler">
          {traillerMovies !== undefined
            ? traillerMovies.results.map((videos) => (
              <div className="trailler__item" key={videos.id}>
                <div className="trailler__image">
                  <img
                    className="img"
                    src={`https://i.ytimg.com/vi/${videos.key}/hqdefault.jpg`}
                    alt=""
                  />
                  <button
                    id={videos.id}
                    className="play"
                    onClick={this.handleButtonClick}
                  ></button>
                </div>
              </div>
            ))
            : ""}
        </div>
      )
    }
  }

  render() {
    const { genres, traillerMovies, movieDetails } = this.props;
    const src = movieDetails.poster_path !== null ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movieDetails.poster_path}` : no_image;

    return (
      <React.Fragment>
        <div className="container movie-details">
          <div className="movie-details__banner">
            <div className="movie-details__image">
              <img className="img" src={src} alt="" />
            </div>
          </div>
          <div className="movie-details__content">
            <div className="tabs">
              <div className="tabs__control">
                <button id="tab1"
                  onClick={this.select}
                  className="tabs__link js-tablinks active">Information
                </button>
                <button
                  className="tabs__link js-tablinks"
                  id="tab2"
                  onClick={this.select}>Overview
                </button>
                <button
                  id="tab3"
                  onClick={this.select}
                  className="tabs__link js-tablinks">Traillers
                </button>
              </div>
              {this.renderContents(movieDetails, genres, traillerMovies)}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null, {
  dispatchPlayVideo: (id) => playVideo(id),
})(DetailsMovie);
