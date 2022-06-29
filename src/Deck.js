import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';

const API_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle';
// const API_CARD_URL = 'https://deckofcardsapi.com/api/deck/${deck_id}/draw/';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null };
  }
  async componentDidMount() {
    let deck = await axios.get(API_URL);
    this.setState({ deck: deck.data });
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

export default Deck;
