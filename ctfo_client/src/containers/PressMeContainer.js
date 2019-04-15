import React, {Component} from 'react';
import QuoteMe from '../Components/QuoteMe';
import EmergencyKittens from '../Components/EmergencyKittens';
import ZenMe from '../Components/ZenMe';
import AdviseMe from '../Components/AdviseMe';

class PressMeContainer extends Component {
  render(){
    return (
    <React.Fragment>
    <QuoteMe />
    <EmergencyKittens />
    <AdviseMe />
    <ZenMe />
    </React.Fragment>
  )
  }

}


export default PressMeContainer;
