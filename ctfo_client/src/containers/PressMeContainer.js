import React, {Component} from 'react';
import QuoteMe from '../Components/QuoteMe';
import EmergencyKittens from '../Components/EmergencyKittens';

class PressMeContainer extends Component {
  render(){
    return (
    <React.Fragment>
    <QuoteMe />
    <EmergencyKittens />
    </React.Fragment>
  )
  }

}


export default PressMeContainer;
