import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transform: '',
    };
  }
  componentDidMount() {
    let angle = Math.random() * 90 - 45;
    let xPos = Math.random() * 40 - 20;
    let yPos = Math.random() * 40 - 20;
    let transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
    this.setState({ transform: transform });
  }
  render() {
    return (
      <img
        className="Card"
        src={this.props.image}
        alt={this.props.name}
        style={{ transform: this.state.transform }}
      />
    );
  }
}

export default Card;
