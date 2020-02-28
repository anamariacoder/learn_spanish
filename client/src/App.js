import React, { useEffect } from "react";
//import PropTypes from "prop-types";
import LevelTest from "./components/LevelTest";

import Resources from "./components/Resources";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/home";
import "./App.css";
import Header from "./components/Header";

const App = props => {
  console.log(props);
  useEffect(() => {
    //props.getUserAction()
  }, []);
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/test" component={LevelTest} />
          <Route path="/resources" component={Resources} />
        </Switch>
      </Router>
    </div>
  );
};

App.propTypes = {};

export default App;
