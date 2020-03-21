import React, { useEffect } from "react";
//import PropTypes from "prop-types";
import { Provider } from "react-redux";
import LevelTest from "./components/level-test/LevelTest";
import Resources from "./components/resources/Resources";
import LearningMethodology from "./components/learningMethodology/LearningMethodology";
import LearningTips from "./components/learningTips/LearningTips";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
import Accueil from "./components/accueil/Accueil";
import "./App.css";
import store from "./store";
import SignFirebase from "./components/user/SignFirebase";
import signFirebaseContainer from "./containers/signFirebaseContainer";

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
            <Route path="/test" component={LevelTest} />
            <Route path="/resources" component={Resources} />
            <Route
              path="/learningMethodology"
              component={LearningMethodology}
            />
            <Route path="/learningTips" component={LearningTips} />
            <Route path="/sign" component={signFirebaseContainer} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};

App.propTypes = {};

export default App;
