import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';

const API_DECK_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle';
const API_CARD_URL = 'https://deckofcardsapi.com/api/deck/';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null, draws: [] };
    this.handleClick = this.handleClick.bind(this);
  }
  async componentDidMount() {
    let deck = await axios.get(API_DECK_URL);
    this.setState({ deck: deck.data });
  }
  handleClick() {
    const { deck, draws } = this.state;
    axios.get(`${API_CARD_URL}${deck.deck_id}/draw/`).then((draw) => {
      this.setState({ draws: [...draws, ...draw.data.cards] });
    });
    console.log(draws);
  }
  render() {
    return (
      <div>
        <h1>CARD DEALER</h1>
        <button onClick={this.handleClick}>DEAL ME A CARD!</button>
        <Card />
      </div>
    );
  }
}

export default Deck;
