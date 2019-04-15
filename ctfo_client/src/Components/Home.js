import React, {Component} from 'react';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      mood_id: 3,
      mood: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSlide = this.handleSlide.bind(this);
    this.setMood = this.setMood.bind(this);
  }

  handleChange(event){
    this.setState({mood_id: event.target.value}, this.setMood())
    // this.handleSlide()
  }

  setMood(){
    this.setState({mood: this.props.moods[this.state.mood_id]})
  }

  handleSlide(){
    return <div><p>{this.state.mood.quotes[0].text}</p></div>
  }

  render() {
    return (
      <div className="slider">
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
