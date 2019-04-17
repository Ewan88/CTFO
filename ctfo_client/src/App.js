import React, { Component } from 'react';
import MainContainer from './containers/MainContainer'
import './App.css';
import './HomePage.css';
import './Components/styles/buttons.css'


class App extends Component {

  render() {
    return (
      <div className="App">
        <MainContainer />
      </div>
    );
  }
}

export default App;
