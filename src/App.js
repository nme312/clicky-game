import React, { Component } from 'react'
import GameCard from "./components/GameCard"
import Wrapper from "./components/Wrapper"
import Title from "./components/Title"
import cards from "./cards.json"
import './App.css'

class App extends Component {
  // state = {
  //   cards
  // }

  // clickChk = (id) => {
  //   console.log(id)
  // }

  // remove = (array, element) => {
  //   const index = array.indexOf(element);
  //   array.splice(index, 1);
  // }

  // randomizer = () => {
  //   let oldArr = [...this.state.cards]
  //   console.log(oldArr)
  //   const newArr = []
  //   while (newArr.length < this.state.cards.length) {
  //     let randomNum = Math.floor(Math.random() * this.state.cards.length)
  //     console.log("Random Number");
  //     console.log(randomNum);

  //     console.log("oldArr [randomNum]");
  //     console.log(oldArr[randomNum]);

  //     console.log("oldArr");
  //     console.log(oldArr);

  //     newArr.push(oldArr[randomNum])

  //     this.remove(oldArr, randomNum)

  //     console.log("newArr");
  //     console.log(newArr)

  //     console.log("====================================================CYCLE LOOP==================================================");
  //   }
  // }

  randomizer = () => {
    let oldArr = [...this.state.cards]
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

    return oldArr;
  }
}


// render() {
//   return (
//       <Wrapper>
//         <Title>Click Game</Title>
//         {this.state.cards.map(card => (
//           <GameCard
//             id={card.id}
//             key={card.id}
//             image={card.image}
//             clickChk={this.clickChk}
//             randomizer={this.randomizer()}
//           />
//         ))}
//       </Wrapper>
//     )
// }

render() {
  return (
    <Title>Syntax Error</Title>
  )
}

export default App
