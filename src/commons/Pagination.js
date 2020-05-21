import React, { Component } from "react";
import { connect } from "react-redux";
import { getListMovies, searchMovies } from "../stores/actions/index";
import { withRouter } from "react-router-dom";

class Pagination extends Component {
  handleClickNext = () => {
    const keySearch = this.props.match.params.value;
    const { page } = this.props.moviesResult;
    this.props.dispatchGetListMovies(page + 1);
    this.props.dispatchSearchMovies(keySearch, page + 1);
  };

  handleClickPrev = () => {
    const keySearch = this.props.match.params.value;
    const { page } = this.props.moviesResult;
    this.props.dispatchGetListMovies(page - 1);
    this.props.dispatchSearchMovies(keySearch, page - 1);
  };

  render() {
    const { moviesResult } = this.props;
    const disablePrev = moviesResult.page <= 1 ? true : false;
    const disableNext =
      moviesResult.page >= moviesResult.total_pages ? true : false;

    return (
      <div className="pagination">
        <ul className="pagination__list">
          <li className="pagination__item">
            <button className="pagination__btn" disabled={disablePrev} onClick={this.handleClickPrev}>
              prev page
            </button>
          </li>
          <li className="pagination__item">
            <p>{moviesResult.page}</p>
          </li>
          <li className="pagination__item">
            <button className="pagination__btn" disabled={disableNext} onClick={this.handleClickNext}>
              next page
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(null, {
  dispatchGetListMovies: (page) => getListMovies(page),
  dispatchSearchMovies: (keySearch, page) => searchMovies(keySearch, page),
})(withRouter(Pagination));
