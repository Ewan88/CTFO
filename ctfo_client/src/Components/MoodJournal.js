import React, {Component} from 'react';
// import Calendar from 'react-calendar';
import DayPicker from 'react-day-picker';
import JournalSelected from './JournalSelected';
import Request from '../helpers/request';

import dayjs from 'dayjs'
import 'react-day-picker/lib/style.css';

class MoodJournal extends Component {
  constructor(props){
    super(props);
    this.state = {
      entries: [],
      date: null
    };
    this.handleClick = this.handleClick.bind(this);
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
    let dates = [];
    let j = 0;
    if (this.state.entries.length > 0) {
      for (let i = 0; i < this.state.entries.length; i++){
        dates.push(new Date(dayjs(this.state.entries[i].date).format('YYYY-M-D')));
        j++;
      }
      return this.loadCalendar(dates);
    } else {
      return this.loadCalendar(dates);
    }
  }

  loadCalendar(dates){
    console.log(new Date("2019-04-17"));
    // console.log(dates);
    if (this.state.entries.length > 0) {
      return (
        <DayPicker
          onDayClick={this.handleClick}
          selectedDays={dates}
        >
        </DayPicker>
      )
    } else {
      return
    }
  }

  handleClick(day) {
    console.log(dayjs(day).format('YYYY-MM-DD'));
    this.setState({date: day });
  }

  // loadDays(dates){
  //   if (dates.length === 0) {
  //     return
  //   } else {
  //     const journalDates = dates.map((day) => {
  //       return <Day modifier="selected" day={day} />
  //     })
  //     return {journalDates}
  //   }
  // }

  render(){
    return (
      <React.Fragment>
      <div>
      <h1>Mood Journal</h1>
      {this.loadEntries()}
      <JournalSelected entry={'help'}/>
      </div>
      </React.Fragment>
    )
  }
}

export default MoodJournal;
