import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LevelTest from "./components/level-test/LevelTest";
import LearningMethodology from "./components/learningMethodology/LearningMethodology";
import LearningTips from "./components/learningTips/LearningTips";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
import Home from "./components/home/Home";
import "./App.css";
import AboutUs from "./components/aboutUs/AboutUs";
import store from "./store";
import Progress1 from "./components/progressGlobal/Progress1";
import TestGlobal from "./components/testGlobal/TestGlobal";
import LevelTestUserSummary from "./components/levelTestUserSummary/LevelTestUserSummary";
import LogIn from "./components/logIn/LogIn";
import Register from "./components/register/Register";

const App = (props) => {
  console.log(props);
  console.log("App.js");
  
  return (
    <div>
      <Provider store={store}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/testGlobal" component={TestGlobal} />
            <Route path="/level-test" component={LevelTest} />
            <Route path="/progressGlobal" component={Progress1} />
            <Route
              path="/levelTestUserSummary"
              component={LevelTestUserSummary}
            />
            <Route
              path="/learningMethodology"
              component={LearningMethodology}
            />
            <Route path="/learningTips" component={LearningTips} />
            <Route path="/login" component={LogIn
            } />
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
