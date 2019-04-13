import React, {Component} from 'react';

class QuoteMe extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote: ''
    };

    this.getQuote = this.getQuote.bind(this);
  }

  getQuote(){
    const url = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({quote: data.quoteText}))
  }

  render(){
    return(
      <div className="button">
       <button onClick={this.getQuote()}>Quote Me!</button>
      </div>
     )
  }
}

export default QuoteMe;
