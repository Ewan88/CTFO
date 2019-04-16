import React, {Component} from 'react';
import Modal from 'react-modal';

class ZenMe extends Component {
  constructor(props){
    super(props);
      this.state = {
        videos: [],
        modalIsOpen: false
      };
      this.getZen = this.getZen.bind(this);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.openShowZen = this.openShowZen.bind(this);
  }

  getZen(){
    const url = 'http://localhost:8080/api/moods/7'
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({videos: data}))
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

  handleVideoSelected(index){
    const selectedVideo = this.state.videos[index];
    this.setState({selectedVideo: selectedVideo})
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
       <iframe width="560" height="315" src={this.state.videos[0]} frameBorder="0" allowFullScreen></iframe>
       <button onClick={this.closeModal}>close</button>
      </Modal>
      </React.Fragment>
     )
  }
}

export default ZenMe;
