import React, {Component} from 'react';
import Modal from 'react-modal';
import MoodSelected from './MoodSelected.js';


class VideoPlayer extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: true
    };
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
  this.setState({modalIsOpen: false});
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
       <iframe width="560" height="315" src={this.props.videos[0].videoUrl} frameBorder="0" allowFullScreen></iframe>
       <button onClick={this.closeModal}>close</button>
      </Modal>
    )
  }
}

export default VideoPlayer;
