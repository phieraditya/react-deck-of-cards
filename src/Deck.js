import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';

const API_BASE_URL = 'https://deckofcardsapi.com/api/deck/';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null, drawn: [] };
    this.getCard = this.getCard.bind(this);
  }
  async componentDidMount() {
    let deck = await axios.get(`${API_BASE_URL}new/shuffle`);
    this.setState({ deck: deck.data });
  }
  async getCard() {
    try {
      // make request using deck id
      const { deck_id } = this.state.deck;
      const cardRes = await axios.get(`${API_BASE_URL}${deck_id}/draw/`);

      // check if there is remaining card in the deck
      // (if cards = [] or success = false)
      if (!cardRes.data.success) {
        throw new Error('No card remaining!');
      }

      // set state using new card info from API
      const card = cardRes.data.cards[0];
      this.setState((oldState) => ({
        drawn: [
          ...oldState.drawn,
          {
            id: card.code,
            name: `${card.value} ${card.suit}`,
            image: card.image,
          },
        ],
      }));

      console.log(cardRes.data);
      // console.log(cardRes.data.remaining);
      // console.log(this.state.drawn);
    } catch (err) {
      alert(err);
    }
  }
  render() {
    return (
      <div>
        <h1>CARD DEALER</h1>
        <button onClick={this.getCard}>DEAL ME A CARD!</button>
        <Card />
      </div>
    );
  }
}

export default Deck;
