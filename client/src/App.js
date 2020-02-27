import React, { useEffect } from "react";
import PropTypes from "prop-types";
import LevelTest from "./components/LevelTest";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
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
          <Route exact path="/" exact component={Home} />
          <Route path="/test" component={LevelTest} />
        </Switch>
      </Router>
    </div>
  );
};

App.propTypes = {};

export default App;
