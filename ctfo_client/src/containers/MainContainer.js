import React, { Component } from "react";
import NavBar from "../Components/navBar";
import Home from "../Components/Home";
import PressMeContainer from "../containers/PressMeContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class MainContainer extends Component {



  render() {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pressMe" component={PressMeContainer} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}
}

export default MainContainer;
