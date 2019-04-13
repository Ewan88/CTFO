import React, {Component} from 'react';
class AdviseMe extends Component {
  constructor(props){
    super(props);
      this.state = {
        advice: ''
      };
      this.getAdvice = this.getAdvice.bind(this);
  }

  getAdvice(){
    const url = 'https://api.adviceslip.com/advice'
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({advice: data.slip.advice}))
  }

  render(){
    return(
      <div className="button">
       <button onClick={this.getAdvice}>Advise Me!</button>
       <p>{this.state.advice}</p>
      </div>
     )
  }
}

export default AdviseMe;
