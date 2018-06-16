import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 header-col bg-primary">
            <div className="page-header">
              <div className="title-div col-md-4">
                <strong>Clicky Game</strong>
              </div>
              <div className="game-info-div col-md-6">
                Placeholde
                Score: | Top Score:
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
