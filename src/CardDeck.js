import React, { Component } from 'react';
import Card from './Card';

class CardDeck extends Component {
  render() {
    return (
      <div>
        <h1>CARD DEALER</h1>
        <button>DEAL ME A CARD!</button>
        <Card />
      </div>
    );
  }
}

export default CardDeck;
