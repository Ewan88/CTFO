import React, {Component} from 'react';
import QuoteMe from '../Components/QuoteMe';
import EmergencyKittens from '../Components/EmergencyKittens';
import AdviseMe from '../Components/AdviseMe';

class PressMeContainer extends Component {
  render(){
    return (
    <React.Fragment>
    <QuoteMe />
    <EmergencyKittens />
    <AdviseMe />
    </React.Fragment>
  )
  }

}


export default PressMeContainer;
