import React, { Component } from 'react';
import Button from './components/Button';
import PlayingCard from './components/PlayingCard'
import './App.css';
import {getRandomCard, drawPlayer, drawDealer, checkDecision} from './utils'
import {Title, Container, Row} from './components/Layout'


class App extends Component {
  state = {
    dealer: drawDealer(),
    player: {cards: [getRandomCard(), getRandomCard()]},
    isCorrect: null
  }
  select = (decision) => {
    console.log(decision)

    const {dealer, player} = this.state

    const isCorrect = checkDecision(decision, player, dealer)

    this.setState({
      dealer: drawDealer(),
      player: {cards: [getRandomCard(), getRandomCard()]},
      isCorrect
    })
  }
  render() {
    const {dealer, player, isCorrect} = this.state

    return (
      <Container>
        <Title>Dealer</Title>
        <Row>
          <PlayingCard width='100' src={`/cards/${dealer.fname}`} alt=""/>
        </Row>

        <Row>
          <Button onClick={() => this.select('HIT')}>HIT</Button>
          <Button onClick={() => this.select('STAY')}>STAY</Button>
          <Button onClick={() => this.select('SPLIT')}>SPLIT</Button>
        </Row>
        <Row>
          {isCorrect ? 'TRUE' : 'FALSE'}
        </Row>
        

        <Title>Player</Title>
        <Row>
          {player.cards.map((d,i) => (
              <PlayingCard width='100' src={`/cards/${d.fname}`} alt=""/>
            ))
          }
        </Row>
        
        <div>
          {/* {player.cards.reduce} */}
        </div>

        

        
      </Container>
    );
  }
}

export default App;
