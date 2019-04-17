import React, {Component} from 'react';
import Modal from 'react-modal';

class VideoPlayer extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: true
    };
    this.closeModal = this.closeModal.bind(this);
    this.randomNum = this.randomNum.bind(this);
  }

  closeModal() {
  this.setState({modalIsOpen: false});
  }

  randomNum(length){
    return Math.floor(Math.random()*length)
  }

  render(){
    if(!this.props.videos){
      return null;
    }
    return(
      <Modal
       className="modal-box"
       isOpen={this.state.modalIsOpen}
       onRequestClose={this.closeModal}
       contentLabel="Example Modal"
       ariaHideApp={false}>
       <iframe title="button-video" width="560" height="315" src={this.props.videos[this.randomNum(this.props.videos.length)].videoUrl} frameBorder="0" allowFullScreen></iframe>
       <button onClick={this.closeModal}>close</button>
      </Modal>
    )
  }
}

export default VideoPlayer;
