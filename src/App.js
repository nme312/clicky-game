import React, { Component } from 'react'
import './App.css'
import Card from "./components/Card"
import Wrapper from "./components/Wrapper"
import Title from "./components/Title"
import cards from "./cards.json"

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Click Game</Title>
        <Card
          id={cards.id}
          image={cards.image}
        />
      </Wrapper>
    )
  }
}

export default App
