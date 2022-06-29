import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';

class CardDeck extends Component {
  constructor(props) {
    super(props);
    this.state = { deckID: '' };
  }
  componentDidMount() {
    let urlDeck = 'https://deckofcardsapi.com/api/deck/new/shuffle';
    // let urlCard = 'https://deckofcardsapi.com/api/deck/${deck_id}/draw/';
    axios.get(urlDeck).then((res) => {
      this.setState({ deckID: res.data.deck_id });
    });
  }
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
