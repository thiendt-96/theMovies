import React from "react";
import { Link } from "react-router-dom";
import IosMore from "../../../node_modules/react-ionicons/lib/IosMore";
import no_image from "../../assets/images/no_image.png";
import CircleProgressbar from "../../components/Movies/CircleProgressbar";
import RateStar from "./RateStar";

const ListMoviesItem = (props) => {
  const { movie } = props;
  const { id } = movie
  const src = movie.poster_path !== null ? `https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}` : no_image;
  return (
    <div className="list-movies">
      <div className="list-movies__item">
        <div className="list-movies__img">
          <Link to={`/movie/${id}`}>
            <img className="img" src={src} alt="" />
          </Link>
          <Link to="" className="options">
            <IosMore font-size="16px" />
          </Link>
        </div>
        <div className="list-movies__content">
          <div className="circle-wrap">
            <CircleProgressbar movie={movie} />
          </div>
          <h3 className="list-movies__title" id="title">
            <Link to={`/movie/${id}`}>{movie.original_title}</Link>
          </h3>
          <RateStar vote_average={movie.vote_average} />
          <p className="list-movies__vote">Vote: {movie.vote_count}</p>
          <p className="list-movies__date">{movie.release_date}</p>
        </div>
      </div>
    </div>
  );
};

export default ListMoviesItem;
