import React, {Component} from 'react';
import Modal from 'react-modal';
import VideoPlayer from './videoPlayer.js'

class ZenMe extends Component {
  constructor(props){
    super(props);
      this.state = {
        videos: null,
        modalIsOpen: false
      };
      this.getZen = this.getZen.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.openShowZen = this.openShowZen.bind(this);
  }

  getZen(){
    const url = '/api/moods/7'
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({videos: data._embedded.videos}))
  }

  closeModal() {
  this.setState({modalIsOpen: false});
  }

  openShowZen(){
    this.getZen();
  }

  render(){
    console.log(this.state.videos);
    return(
      <React.Fragment>
        <div>
          <button className="button" onClick={this.openShowZen}>Zen Me!</button>
        </div>
        <VideoPlayer videos={this.state.videos}/>
      </React.Fragment>
     )
  }
}

export default ZenMe;
