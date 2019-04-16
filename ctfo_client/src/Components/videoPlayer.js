import React, {Component} from 'react';
import Modal from 'react-modal';


class VideoPlayer extends Component {
  constructor(props){
    super(props);
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
       isOpen="true"
       onRequestClose={this.closeModal}
       contentLabel="Example Modal"
       ariaHideApp={false}
       >
       <iframe width="560" height="315" src={this.props.videos[0].videoUrl} frameBorder="0" allowFullScreen></iframe>
       <button onClick={this.closeModal}>close</button>
      </Modal>
    )
  }
}

export default VideoPlayer;
