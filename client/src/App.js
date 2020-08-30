import React, { useEffect } from "react";
// import { Provider } from "react-redux";
import { connect } from "react-redux";
// import store from "./store";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LevelTest from "./components/level-test/LevelTest";
import LearningMethodology from "./components/learningMethodology/LearningMethodology";
import LearningTips from "./components/learningTips/LearningTips";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
import Home from "./components/home/Home";
import "./App.css";
import AboutUs from "./components/aboutUs/AboutUs";

import Progress1 from "./components/progressGlobal/Progress1";
import TestGlobal from "./components/testGlobal/TestGlobal";
import LevelTestUserSummary from "./components/levelTestUserSummary/LevelTestUserSummary";
import LogIn from "./components/logIn/LogIn";
import Register from "./components/register/Register";
import Dashboard from "./components/dashboard";

import { deleteAccount } from "../src/actions/userActions";

const App = (props) => {
  console.log(props);
  console.log("App.js");

  useEffect(() => {
    console.log(" App    sessionStorage ", sessionStorage);

    const existingToken = sessionStorage.getItem("xAuth");
    const authUser = sessionStorage.getItem("userId");

    if (authUser) props.userProps.isAuth = true;
    props.userProps.user.id = authUser;
    console.log("App   props.userProps ", props.userProps);
  }, []);

  return (
    <div>
      {/* <Provider store={store}> */}
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
          <Route path="/learningMethodology" component={LearningMethodology} />
          <Route path="/learningTips" component={LearningTips} />
          <Route path="/login" component={LogIn} />
          <Route path="/register" component={Register} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/dashboard" component={Dashboard} />

          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
      {/* </Provider> */}
    </div>
  );
};
App.propTypes = {};

const mapStateToProps = (state) => ({
  userProps: state.userState,
});

const mapDispatchToProps = (dispatch) => ({
  deleteAccount: () => dispatch(deleteAccount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
