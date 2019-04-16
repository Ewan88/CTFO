import React, {Component} from 'react';
import Calendar from 'react-calendar';
import JournalSelected from './JournalSelected';
import Request from '../helpers/request';

class MoodJournal extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      entries_holder: [],
      entries: []
    }
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    console.log(this.state.date);
    const request = new Request();
    request.get('/api/journals')
    .then(data => {
      this.setState({entries_holder: data._embedded.journals})
    })
    .then(this.loadEntries())
  }

  loadEntries(){
    console.log('loading entries...');
    let a = [];
    let j = 0;
    if (this.state.entries) {
      for (let i = 0; i < this.state.entries_holder.length; i++){
        // console.log(this.state.entries[i].date);
        // console.log(this.state.entries[i].date instanceof Date);
        // a.push(this.state.entries_holder[i].date)
        // console.log(a[j]);
        // console.log(a[j].constructor.name);
        // console.log(a[j] instanceof String);
        // j++;
      }
      return this.loadCalendar(a);
    } else {
      return this.loadCalendar(a);
    }
  }

  loadCalendar(a){
    console.log(this.state.entries);
    console.log(a);
    if (this.state.entries) {
      return (
        <Calendar onChange={this.onChange} view="month"
        value={this.state.date} />
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
