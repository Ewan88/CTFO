import React, {Component} from 'react';
import MoodSelected from './MoodSelected';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      mood_id: 2,
      mood: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSlide = this.handleSlide.bind(this);
  }

  handleChange(event){
    console.log(event.target.value);
    this.setState({mood: this.props.moods[event.target.value]})
  }

  handleSlide(){
    return <div><p>{this.state.mood.quotes[0].text}</p></div>
  }

  render() {
    return (
      <div className="slider">
        <h1 class="animated fadeIn delay-0.5s">How are you feeling today?</h1>
        <label class="animated fadeIn delay-0.5s" htmlFor="customRange1">☹    </label>
          <input
            class="animated fadeIn delay-0.5s"
            type="range"
            onChange={this.handleChange}
            min="0"
            max="4"
            className="custom-range"
            id="customRange1" />
        <label class="animated fadeIn delay-0.5s" htmlFor="customRange1">    ☺</label>
        <MoodSelected mood={this.state.mood} />
      </div>
    );
  }

}

export default Home;
