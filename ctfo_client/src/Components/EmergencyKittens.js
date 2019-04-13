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
      <div>
       <button className="button" onClick={this.getKittens}>Emergency Kittens!</button>
       <img id="kittens" src={this.state.kitten} alt=""></img>
      </div>
     )
  }
}

export default EmergencyKittens;
