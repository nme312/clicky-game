import React, { Component } from 'react'
import GameCard from "./components/GameCard"
import Container from "./components/Container"
import Row from "./components/Row"
import Title from "./components/Title"
import Scores from "./components/Scores"
import Cards from "./components/Cards"
import Footer from "./components/Footer"
import cards from "./cards.json"
import './App.css'

class App extends Component {
  state = {
    cards,
    score: 0,
    topScore: 0
  }

  clickChk = (index) => {
    let cardsClone = [...this.state.cards]

    if (!this.state.cards[index].clicked) {
      cardsClone[index].clicked = true
      this.setState({ cards: cardsClone })
      this.setState({ score: this.state.score + 1 })
    } else {
      cardsClone.forEach(card => card.clicked = false)
      this.setState({
        score: 0,
        cards: cardsClone
      })
    }

    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score })
    }
  }

  randomizer = () => {
    let oldArr = [...this.state.cards];
    var currentIndex = oldArr.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1

      // And swap it with the current element.
      temporaryValue = oldArr[currentIndex];
      oldArr[currentIndex] = oldArr[randomIndex];
      oldArr[randomIndex] = temporaryValue;
    }
    console.log(oldArr)
    this.setState({ cards: oldArr })
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Title><h1>Clicky Game</h1></Title>
            <Scores><h4>Score: {this.state.score} | Top Score: {this.state.topScore}</h4> </Scores>
          </Row>
          <Row>
            <Cards>
              {this.state.cards.map(card => (
                <GameCard
                  id={card.id}
                  key={card.id}
                  image={card.image}
                  clickChk={() => this.clickChk(card.id - 1)}
                  randomizer={this.randomizer}
                />
              ))}
            </Cards>
          </Row>
        </Container>
        <Footer><span></span></Footer>
      </div>
    )
  }
}

export default App