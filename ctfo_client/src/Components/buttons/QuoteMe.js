import React, {Component} from 'react';
import Modal from 'react-modal';

class QuoteMe extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote: '',
      modalIsOpen: false
    };

    this.getQuote = this.getQuote.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openShowQuote = this.openShowQuote.bind(this);
  }

  getQuote(){
    const url = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({quote: data.quoteText}));
  }

  openModal() {
  this.setState({modalIsOpen: true});
  }

  closeModal() {
  this.setState({modalIsOpen: false});
  }

  openShowQuote(){
    this.openModal();
    this.getQuote();
  }

  render(){
    return(
       <React.Fragment>
      <div className="animated slideInLeft duration-3s">
       <button className="button" onClick={this.openShowQuote}>Quote Me!</button>
      </div>
      <Modal
       className="modal-box"
       isOpen={this.state.modalIsOpen}
       onRequestClose={this.closeModal}
       contentLabel="Example Modal"
       ariaHideApp={false}
       >
       <p>{this.state.quote}</p>
       <button onClick={this.closeModal}>close</button>
      </Modal>
       </React.Fragment>
     )
  }
}

export default QuoteMe;
