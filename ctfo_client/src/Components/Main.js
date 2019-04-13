import React, { Component } from "react";
import NavBar from "./navBar";
import Home from "./Home";
import PressMe from "./PressMe";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Main extends Component {



  render() {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pressMe" component={PressMe} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}
}

export default Main;
