import React, {Component} from 'react';
import Calendar from 'react-calendar';
import JournalSelected from './JournalSelected';
import Request from '../helpers/request';

class MoodJournal extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      entries_holder: {},
      entries: []
    }
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/journals')
    .then(data => {
      this.setState({entries: data._embedded.journals})
    })
    // .then(this.loadEntries())
    .then(this.loadCalendar())
  }

  loadEntries(){
    console.log('loading entries...');
    let a = [];
    if (this.state.entries) {
      for (let i = 0; i < this.state.entries.length; i++){
        console.log(this.state.entries[i].date);
        a.push(this.state.entries[i].date)
      }
      return a;
    } else {
      return new Date();
    }
  }

  loadCalendar(){
    console.log(this.state.entries);
    if (this.state.entries) {
      return (
        <Calendar onChange={this.onChange} view="month"
        value={this.loadEntries()} />
      )
    } else {
      return
    }
  }

  onChange(date){
    this.setState({date: date});
  }

  render(){
    return (
      <div>
      <h1>Mood Journal</h1>
      {this.loadCalendar()}
      <JournalSelected entry={this.state.date.toLocaleDateString('en-US')}/>
      </div>
    )
  }
}

export default MoodJournal;
