import React, {Component} from 'react';
import Calendar from 'react-calendar';
import JournalSelected from './JournalSelected';

class MoodJournal extends Component {
  constructor(props){
    super(props);
    this.state = {
    date: new Date(),
    entry: null
  }
}

  onChange(event) {
    console.log(event);
  }



  render(){
    return (
      <div>
        <h1>Mood Journal</h1>
        <Calendar onChange={this.onChange}
        value={this.state.date} />
        <JournalSelected entry={this.state.entry}/>
      </div>
    )
  }

}

export default MoodJournal;
