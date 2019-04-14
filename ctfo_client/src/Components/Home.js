import React, {Component} from 'react';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      mood_id: 3
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({mood_id: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <h1>How are you feeling today?</h1>
        <label htmlFor="customRange1">☹    </label>
          <input
            type="range"
            value={this.state.mood_id}
            onChange={this.handleChange}
            min="1"
            max="5"
            className="custom-range"
            id="customRange1" />
        <label htmlFor="customRange1">    ☺</label>
      </div>
    );
  }


}

export default Home;
