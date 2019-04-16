import React, {Component} from 'react';
import Calendar from 'react-calendar';
import JournalSelected from './JournalSelected';
import Request from '../helpers/request';

class MoodJournal extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
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
    .then(this.loadEntries())
  }

  loadEntries(){
    console.log('loading entries...');
    console.log(this.state.entries);
    let a = [];
    let j = 0;
    if (this.state.entries) {
      for (let i = 0; i < this.state.entries.length; i++){
        // console.log(this.state.entries[i].date);
        // console.log(this.state.entries[i].date instanceof Date);
        a.push(this.state.entries[i].date);
        console.log(a[j]);
        console.log(a[j].constructor.name);
        console.log(a[j] instanceof String);
        j++;
        console.log(a);
      }
      return this.loadCalendar(a);
    } else {
      return this.loadCalendar(a);
    }
  }

  loadCalendar(a){
    if (this.state.entries) {
      return (
        <Calendar onChange={this.onChange} view="month"
        value={this.state.entries} />
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
      {this.loadEntries()}
      <JournalSelected entry={this.state.date.toLocaleDateString('en-US')}/>
      </div>
    )
  }
}

export default MoodJournal;
