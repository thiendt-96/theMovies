/* eslint-disable no-useless-concat */
import React, { Component } from "react";
import { connect } from "react-redux";
import MdClose from "../../../node_modules/react-ionicons/lib/MdClose";
import { CloseVideo } from "../../stores/actions";
import { isEmpty } from "lodash";

class Videos extends Component {
  handleClose = (event) => {
    this.props.dispatchCloseVideo();
    var iframe = document.querySelector("iframe");
    if (iframe) {
      var iframeSrc = iframe.src;
      iframe.src = iframeSrc;
    }
  };

  render() {
    const { playVideo, idVideo } = this.props.stateVideo;
    const { movieDetails } = this.props.movieDetails;
    const className = playVideo ? "video video--block" : "video video--hidden";
    let videoPlay;

    if (!isEmpty(movieDetails)) {
      const { videos } = movieDetails;
      videos.results.forEach((video) => {
        if (video.id === idVideo) {
          videoPlay = video;
        }
      });
    }

    if (!isEmpty(videoPlay)) {
      return (
        <div className={className}>
          <div className="video__header">
            <h3 className="video__title">{videoPlay.name}</h3>
            <button onClick={this.handleClose} className="close-video">
              <MdClose color="white" />
            </button>
          </div>
          <div className="video__content">
            <iframe
              className="youtube-video"
              width="100%"
              height="90%"
              src={`https://www.youtube.com/embed/${videoPlay.key}`}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              title={videoPlay.name}
            ></iframe>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    stateVideo: state.getMovieDetailsReducer,
    movieDetails: state.getMovieDetailsReducer,
  };
};

export default connect(mapStateToProps, {
  dispatchCloseVideo: () => CloseVideo(),
})(Videos);
