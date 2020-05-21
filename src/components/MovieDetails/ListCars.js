import React from "react";
import { Link } from "react-router-dom";
import no_image from "../../assets/images/no_image.png";

const ListCars = (props) => {
  const { credits } = props;

  return (
    <section className="card container">
      <h4 className="card__title">Top Billed Cast</h4>
      <div className="card__list">
        {credits !== undefined
          ? credits.cast.map((cast) => (
            <div className="card__item" key={cast.id}>
              <Link to="" className="card__avatar">
                <img
                  className="card__img"
                  src={
                    cast.profile_path !== null
                      ? `https://image.tmdb.org/t/p/w138_and_h175_face/${cast.profile_path}`
                      : no_image
                  }
                  alt=""
                />
              </Link>
              <p className="card__name">{cast.name}</p>
              <p className="card__character">{cast.character}</p>
            </div>
          ))
          : ""}
      </div>
    </section>
  );
};

export default ListCars;
