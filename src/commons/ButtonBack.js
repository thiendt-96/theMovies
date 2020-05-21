import React, { Component } from "react";
import MdArrowRoundBack from "../../node_modules/react-ionicons/lib/MdArrowRoundBack";

class ButtonBack extends Component {
  handleGoBack = () => {
    this.props.goBack();
  };

  render() {
    return (
      <button className="back" onClick={this.handleGoBack}>
          <MdArrowRoundBack color="white" fontSize="5rem" />
      </button>
    );
  }
}

export default ButtonBack;
