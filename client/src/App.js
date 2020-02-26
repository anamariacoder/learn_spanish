import React, { useEffect } from "react";
import PropTypes from "prop-types";
import LevelTest from "./components/LevelTest";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = props => {
  console.log(props);
  useEffect(() => {
    //props.getUserAction()
  }, []);
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={LevelTest} />
        </Switch>
      </Router>
    </div>
  );
};

App.propTypes = {};

export default App;
