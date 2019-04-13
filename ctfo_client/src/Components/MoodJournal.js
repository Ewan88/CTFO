import React, {Component} from 'react';
import Calendar from 'react-calendar';



class MoodJournal extends Component {

  constructor(props) {
        super(props);

        this.state = {
            myEvents: []
        };

        mobiscroll.util.getJson('https://trial.mobiscroll.com/events/', (events) => {
            this.setState({ myEvents: events});
        }, 'jsonp');
    }


    render() {
        return (
            <mobiscroll.Eventcalendar
                theme="ios"
                display="inline"
                data={this.state.myEvents}
                view={{
                    calendar: { type: 'month' },
                    eventList: { type: 'month', scrollable: true }
                }}
                data={this.state.myEvents}
            />
        );
    }



  // state = {
  //   date: new Date(),
  // }
  //
  // onChange = date => this.setState({ date })
  //
  //
  //
  // render(){
  //   return (
  //     <div>
  //       <h1>Mood Journal</h1>
  //       <Calendar onChange={this.onChange}
  //       value={this.state.date}
  //       onClickDay={this.onClickDay} />
  //
  //     </div>
  //   )
  // }
}

export default MoodJournal;
