import React, { Component } from 'react';
import MdStar from '../../../node_modules/react-ionicons/lib/MdStar';

class RateStar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 0,
      isCheck: false,
      totalStars: 5,
    }
  }

  handleChange = (value) => {
    this.setState({
      value: value,
      isCheck: true,
    })
  }

  render() {
    const { value, isCheck, totalStars, } = this.state
    const { vote_average } = this.props
    console.log(vote_average);

    return (
      <div>
        <ul className="rate__list">
          {
            [...Array(totalStars)].map((n, i) => (
              <li key={i} className="rate__item" onClick={() => this.handleChange(i + 1)}>
                <MdStar color={isCheck && (i < value) ? 'yellow' : 'white'} fontSize="25px" />
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default RateStar;