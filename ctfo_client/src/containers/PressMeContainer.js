import React, {Component} from 'react';
import QuoteMe from '../Components/QuoteMe';
import EmergencyKittens from '../Components/EmergencyKittens';
import ZenMe from '../Components/ZenMe';
import AdviseMe from '../Components/AdviseMe';
import RageMe from '../Components/RageMe';
import EnergiseMe from '../Components/EnergiseMe';

class PressMeContainer extends Component {
  render(){
    return (
    <React.Fragment>
    <QuoteMe />
    <EmergencyKittens />
    <AdviseMe />
    <ZenMe />
    <RageMe />
    <EnergiseMe />
    </React.Fragment>
  )
  }

}


export default PressMeContainer;
