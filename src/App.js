import React, { Component } from 'react'
import Card from "./components/Card"
import Wrapper from "./components/Wrapper"
import Title from "./components/Title"
import cards from "./cards.json"
import './App.css'

class App extends Component {
  state = {
    cards
  }

  randomizer = () => {
    console.log(this.state.cards.id)
  }

  render() {
    return (
      <Wrapper>
        <Title>Click Game</Title>
        {this.state.cards.map(card => (
          <Card
            id={card.id}
            key={card.id}
            image={card.image}
            randomizer={this.randomizer}
          />
        ))}
      </Wrapper>
    )
  }
}

export default App
