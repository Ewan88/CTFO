import React, { Component } from "react";
import NavBar from "../Components/navBar";
import Home from "../Components/Home";
import PressMe from "../Components/PressMe";
import MoodJournal from "../Components/MoodJournal";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class MainContainer extends Component {



  render() {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact Path="/moodjournal" component={MoodJournal} />
        <Route exact path="/pressMe" component={PressMe} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}
}

export default MainContainer;
