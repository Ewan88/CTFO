import React, {Component} from 'react';

class EmergencyKittens extends Component {
  constructor(props){
    super(props);
      this.state = {
        kitten: ''
      };
      this.getKittens = this.getKittens.bind(this);
  }

  getKittens(){
    const url = 'https://api.thecatapi.com/v1/images/search'
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({kitten: data[0].url}))
  }

  render(){
    return(
      <div className="button">
       <button onClick={this.getKittens}>Emergency Kittens!</button>
       <img src={this.state.kitten} alt="kitten"></img>
      </div>
     )
  }

}

export default EmergencyKittens;
