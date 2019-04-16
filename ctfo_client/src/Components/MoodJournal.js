import React, {Component} from 'react';
import Calendar from 'react-calendar';
import JournalSelected from './JournalSelected';
import Request from '../helpers/request';
import dayjs from 'dayjs'

class MoodJournal extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: new dayjs(),
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
    .then(() => {
      this.loadEntries()
    })
  }

  loadEntries(){
    console.log('loading entries...');
    let a = [];
    let j = 0;
    if (this.state.entries.length > 0) {
      for (let i = 0; i < this.state.entries.length; i++){
        a.push(dayjs(this.state.entries[i].date).format('YYYY-M-D'));
        console.log(a[j]);
        j++;
      }
      return this.loadCalendar(a);
    } else {
      return this.loadCalendar(a);
    }
  }

  loadCalendar(a){
    console.log('rendering calendar...');
    if (this.state.entries.length > 0) {
      return (
        <Calendar onChange={this.onChange} view="month"
        value={a} />
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
      <JournalSelected entry={'help'}/>
      </div>
    )
  }
}

export default MoodJournal;
