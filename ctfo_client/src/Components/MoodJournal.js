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
      this.setState({entries: data._embedded})
    });
  }

  onChange(date){
    this.setState({date: date});
    console.log(this.state.date);
  }

  render(){
    return (
      <div>
        <h1>Mood Journal</h1>
        <Calendar onChange={this.onChange}
        value={this.state.date} />
        <JournalSelected entry={this.state.date.toLocaleDateString('en-US')}/>
      </div>
    )
  }
}

export default MoodJournal;
