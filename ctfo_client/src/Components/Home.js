import React, {Component} from 'react';


class Home extends Component {

  render() {
    return (
      <div className="App">
        <h1>How are you feeling today?</h1>
        <label htmlFor="customRange1">☹    </label>
        <input type="range" className="custom-range" id="customRange1" />
        <label htmlFor="customRange1">    ☺</label>
      </div>
    );
  }


}

export default Home;
