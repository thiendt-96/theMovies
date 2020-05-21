import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { searchMovies } from "../../stores/actions/index";
import MdSearch from "react-ionicons/lib/MdSearch";

class InputSearchMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: [],
      isSearch: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const keySearch = this.state.value;
    this.props.dispatchSearchMovies(keySearch);
    const { value } = this.state;
    this.props.history.push(`/search/${value}`);
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      isSearch: true,
    });
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handleSubmit(event);
    }
  };

  render() {
    const { value, isSearch } = this.state;
    const className = !isSearch || value.length === 0 ? "disabled_search" : "abled_search";
    
    return (
      <div className="search">
        <form className="form-search" onSubmit={this.handleSubmit}>
          <input
            className="form-search__input"
            placeholder="search movie by name"
            value={this.state.value}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
          <button
            to={`search/${value}`}
            className={`form-search__btn ${className}`}
          >
            <MdSearch color="white" />
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, {
  dispatchSearchMovies: (keySearch) => searchMovies(keySearch),
})(withRouter(InputSearchMovie));
