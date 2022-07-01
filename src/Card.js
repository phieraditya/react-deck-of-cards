import React, { Component } from 'react';

class Card extends Component {
  render() {
    let images = this.props.drawn.map((d) => (
      <img src={d.image} alt={d.name} />
    ));
    return <div>{images}</div>;
  }
}

export default Card;
