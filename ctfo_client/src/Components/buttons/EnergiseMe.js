import React, {Component} from 'react';
import Modal from 'react-modal';
import VideoPlayer from '../VideoPlayer.js'

class EnergiseMe extends Component {
  constructor(props){
    super(props);
      this.state = {
        videos: null,
        modalIsOpen: false
      };
      this.getEnergy = this.getEnergy.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.openShowEnergy = this.openShowEnergy.bind(this);
  }

  getEnergy(){
    const url = '/api/moods/8'
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({videos: data._embedded.videos}))
  }

  closeModal() {
  this.setState({modalIsOpen: false});
  }

  openShowEnergy(){
    this.getEnergy();
  }

  render(){
    return(
      <React.Fragment>
        <div>
          <button className="button" onClick={this.openShowEnergy}>Energise Me!</button>
        </div>
        <VideoPlayer videos={this.state.videos}/>
      </React.Fragment>
     )
  }
}

export default EnergiseMe;
