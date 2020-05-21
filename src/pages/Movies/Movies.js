import React, { Component } from "react";
import Header from "../../commons/Header";
import { connect } from "react-redux";
import ListMovies from "../../components/Movies/ListMovies";
import InputSearchMovie from "../../components/Movies/InputSearchMovie";
import { getListMovies } from "../../stores/actions/index";

class Movies extends Component {
  componentDidMount() {
    this.props.dispathGetPostListMovies();
  }

  render() {
    return (
      <div className="main">
        <Header />
        <section className="inner_content">
          <div className="container inner_content__wrapper">
            <div className="content">
              <div className="search">
                <h2 className="inner_content__title">Popular Movies</h2>
                <InputSearchMovie history={this.props.history} />
              </div>
              <ListMovies />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(null, {
  dispathGetPostListMovies: () => getListMovies(),
})(Movies);
