import React, {Component} from 'react';
import Modal from 'react-modal';

class ZenMe extends Component {
  constructor(props){
    super(props);
      this.state = {
        zen: '',
        modalIsOpen: false
      };
      this.getZen = this.getZen.bind(this);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.openShowZen = this.openShowZen.bind(this);
  }

  getZen(){
    const url = 'https://api.adviceslip.com/advice'
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({zen: data.zen}))
  }

  openModal() {
  this.setState({modalIsOpen: true});
  }

  closeModal() {
  this.setState({modalIsOpen: false});
  }

  openShowZen(){
    this.openModal();
    this.getZen();
  }

  render(){
    return(
      <React.Fragment>
      <div>
       <button className="button" onClick={this.openShowZen}>Zen Me!</button>
      </div>
      <Modal
       className="modal-box"
       isOpen={this.state.modalIsOpen}
       onRequestClose={this.closeModal}
       contentLabel="Example Modal"
       ariaHideApp={false}
       >
       <p>{this.state.zen}</p>
       <button onClick={this.closeModal}>close</button>
      </Modal>
      </React.Fragment>
     )
  }
}

export default ZenMe;
