import React, { Component } from 'react'
import GameCard from "./components/GameCard"
import Wrapper from "./components/Wrapper"
import Title from "./components/Title"
import cards from "./cards.json"
import './App.css'

class App extends Component {
  state = {
    cards
  }

  clickChk = (id) => {
    console.log(id)
  }

  randomizer = () => {
    // console.log(id)

    
  }
  
  getNewID = (id) => {
    const arr = []
    while (arr.length < 8) {
      var randomnumber = Math.floor(Math.random() * 8) + 1;
      if (arr.indexOf(randomnumber) > -1) continue;
      arr[arr.length] = randomnumber;
    }
    return arr;
  }

  render() {
    return (
      <Wrapper>
        <Title>Click Game</Title>
        {this.state.cards.map(card => (
          <GameCard
            id={card.id}
            key={card.id}
            image={card.image}
            clickChk={this.clickChk}
            randomizer={this.randomizer}
          />
        ))}
      </Wrapper>
    )
  }
}

export default App
