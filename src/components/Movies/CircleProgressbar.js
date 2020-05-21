import React, { Component } from "react";
import { CircularProgressbar } from "react-circular-progressbar";

class CircleProgressbar extends Component {
  render() {
    const { movie } = this.props;
    return (
      <React.Fragment>
        <CircularProgressbar
          value={movie.vote_average * 10}
          text={`${movie.vote_average} *`}
          styles={{
            path: {
              stroke: "#c7ca2f",
              transformOrigin: "center center",
            },
            trail: {
              stroke: "#ddd",
              strokeLinecap: "butt",
              transform: "rotate(0.25turn)",
              transformOrigin: "center center",
            },
            text: {
              fill: "#fff",
              fontSize: "30px",
            },
            background: {
              fill: "#081c22",
            },
          }}
        />
      </React.Fragment>
    );
  }
}

export default CircleProgressbar;
