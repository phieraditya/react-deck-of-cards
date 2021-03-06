import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import './Deck.css';

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
    } catch (err) {
      alert(err);
    }
  }
  render() {
    let cards = this.state.drawn.map((d) => (
      <Card key={d.id} image={d.image} name={d.name} />
    ));
    return (
      <div className="Deck">
        <h1 className="Deck-title">♦ CARD DEALER ♦</h1>
        <button className="Deck-btn" onClick={this.getCard}>
          DEAL ME A CARD!
        </button>
        <div className="Deck-card-area">{cards}</div>
      </div>
    );
  }
}

export default Deck;
