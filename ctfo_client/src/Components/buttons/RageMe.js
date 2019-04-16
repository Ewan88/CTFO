import React, {Component} from 'react';
import Modal from 'react-modal';
import VideoPlayer from '../VideoPlayer.js'

class RageMe extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: null,
      modalIsOpen: false
    };
    this.getRage = this.getRage.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openShowRage = this.openShowRage.bind(this);
  }

  getRage(){
    const url = 'api/moods/6'
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({videos: data._embedded.videos}))
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  openShowRage(){
    this.getRage();
  }

  render(){
    return(
      <React.Fragment>
        <div class="animated slideInLeft duration-3s">
          <button className="button" onClick={this.openShowRage}>Rage Me!</button>
        </div>
        <VideoPlayer videos={this.state.videos}/>
      </React.Fragment>
    )
  }

}

export default RageMe;
