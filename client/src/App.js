import React, { useEffect } from "react";
//import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LevelTest from "./components/level-test/LevelTest";

import Resources from "./components/resources/Resources";
import LearningMethodology from "./components/learningMethodology/LearningMethodology";
import LearningTips from "./components/learningTips/LearningTips";
// import SocialMedia from "./components/socialMedia/SocialMedia";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
import Home from "./components/home/Home";
import "./App.css";

import AboutUs from "./components/aboutUs/AboutUs";
import store from "./store";
// import SignFirebase from "./components/user/SignFirebase";
// import signFirebaseContainer from "./containers/signFirebaseContainer";
// import ProgressGlobal from "./components/progressGlobal/Progress1";
import Progress1 from "./components/progressGlobal/Progress1";
import TestGlobal from "./components/testGlobal/TestGlobal";
import LevelTestUserSummary from "./components/levelTestUserSummary/LevelTestUserSummary";
import LogIn from "./components/logIn/LogIn";
import Register from "./components/register/Register"; //???????????? juillet

// get our fontawesome imports

const App = (props) => {
  console.log(props);
  useEffect(() => {}, []);
  return (
    <div>
      <Provider store={store}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/testGlobal" component={TestGlobal} />
            <Route path="/test" component={LevelTest} />
            <Route path="/progressGlobal" component={Progress1} />
            <Route
              path="/levelTestUserSummary"
              component={LevelTestUserSummary}
            />
            <Route path="/resources" component={Resources} />
            <Route
              path="/learningMethodology"
              component={LearningMethodology}
            />
            <Route path="/learningTips" component={LearningTips} />
            {/* **5** 17 juin  */}
            {/* <Route path="/sign" component={signFirebaseContainer} /> */}
            <Route path="/login" component={LogIn} />
            <Route path="/register" component={Register} />
            <Route path="/aboutUs" component={AboutUs} />
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
};

App.propTypes = {};

export default App;
