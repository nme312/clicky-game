import React, { Component } from 'react'
import GameCard from "./components/GameCard"
import Container from "./components/Container"
import Row from "./components/Row"
import Header from "./components/Header"
import Title from "./components/Title"
import Scores from "./components/Scores"
import Cards from "./components/Cards"
import cards from "./cards.json"
import './App.css'

class App extends Component {
  state = {
    cards,
    score: 0,
    topScore: 0

  }

  clickChk = (clicked) => {
    if (!clicked) {
      clicked = true;
    }

  }

  remove = (array, element) => {
    const index = array.indexOf(element);
    array.splice(index, 1);
  }

  randomizer = () => {
    let oldArr = [...this.state.cards];
    var currentIndex = oldArr.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = oldArr[currentIndex];
      oldArr[currentIndex] = oldArr[randomIndex];
      oldArr[randomIndex] = temporaryValue;
    }
    console.log(oldArr);

    this.setState({ cards: oldArr })
  }

  render() {
    return (
      <Container>
        <Row>
          <Header>
            <Title>Clicky Game</Title>
            <Scores>Score: {this.state.score} | Top Score: {this.state.topScore}</Scores>
          </Header>
        </Row>
        <Row>
          <Cards>
            {this.state.cards.map(card => (
              <GameCard
                id={card.id}
                key={card.id}
                image={card.image}
                clickChk={this.clickChk}
                randomizer={this.randomizer}
              />
            ))}
          </Cards>
        </Row>
      </Container>
    )
  }
}

export default App
