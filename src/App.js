import React, { Component } from 'react'
import './App.css'
import Card from "./components/FriendCard"
import Wrapper from "./components/Wrapper"
import Title from "./components/Title"

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row row-1">
          <div className="col-md-8 offset-1 name-plate-col">
            <a className="">Nicholas Edwards</a>
          </div>
          <div className="col-md-3 navbar-col">
            <div className="nav-buttons">
              <span className="col-md-6" id="guessStatus">(Guess Status{})</span>
              <span className="col-md-3">Score:{} | Top Score:{}</span>
            </div>
          </div>
        </div>


      </div>
    )
  }
}

export default App
