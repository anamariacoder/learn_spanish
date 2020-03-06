import React, { useEffect } from "react";
//import PropTypes from "prop-types";
import { Provider } from "react-redux";
import LevelTest from "./components/level-test/LevelTest";
import Resources from "./components/resources/Resources";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/layouts/NavBar";
import Accueil from "./components/accueil/Accueil";
import "./App.css";
import { store } from "./store";
import SignFirebase from "./components/user/SignFirebase";

const App = props => {
  console.log(props);
  useEffect(() => {}, []);
  return (
    <div>
      <Provider store={store}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Accueil} />
            <Route path="/resources" component={Resources} />
            <Route path="/test" component={LevelTest} />
            <Route path="/sign" component={SignFirebase} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};

App.propTypes = {};

export default App;
