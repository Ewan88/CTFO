import React, {Component} from 'react';
import MoodSelected from './MoodSelected';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      mood_id: 3,
      mood: null
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
            min="0"
            max="4"
            className="custom-range"
            id="customRange1" />
        <label htmlFor="customRange1">    ☺</label>
        <MoodSelected mood={this.state.mood} />
      </div>
    );
  }


}

export default Home;
