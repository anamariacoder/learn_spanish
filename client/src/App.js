import React, { useEffect } from "react";
//import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LevelTest from "./components/level-test/LevelTest";
import Resources from "./components/resources/Resources";
import LearningMethodology from "./components/learningMethodology/LearningMethodology";
import LearningTips from "./components/learningTips/LearningTips";
import SocialMedia from "./components/socialMedia/SocialMedia";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
import Home from "./components/home/Home";
import "./App.css";

import AboutUs from "./components/aboutUs/AboutUs";
import store from "./store";
import SignFirebase from "./components/user/SignFirebase";
import signFirebaseContainer from "./containers/signFirebaseContainer";
// import ProgressGlobal from "./components/progressGlobal/Progress1";
import Progress1 from "./components/progressGlobal/Progress1";
import TestGlobal from "./components/testGlobal/TestGlobal";

const App = (props) => {
  console.log(props);
  useEffect(() => {}, []);
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/font-awesome.min.css"
      ></link>
      <script
        src="https://kit.fontawesome.com/8340b5561f.js"
        crossOrigin="anonymous"
      ></script>

      <Provider store={store}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/test" component={LevelTest} />
            <Route path="/testGlobal" component={TestGlobal} />
            <Route path="/progressGlobal" component={Progress1} />
            <Route path="/resources" component={Resources} />
            <Route
              path="/learningMethodology"
              component={LearningMethodology}
            />
            <Route path="/learningTips" component={LearningTips} />
            <Route path="/sign" component={signFirebaseContainer} />
            <Route path="/aboutUs" component={AboutUs} />
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </Router>
      </Provider>
      {/* <Router> */}
      {/* <Footer /> */}

      {/* <Route path="/aboutUs" component={AboutUs} /> */}

      {/* <div className="defineFooter">
            <p>&copy; 2020 Codé</p> */}
      {/* <Route exact path="./components/aboutUs/AboutUs" component={AboutUs} /> */}

      {/* <li>
                <a href="https://cnnespanol.cnn.com"> Nouvelles en espagnol</a>
              </li> */}
      {/* </ul> */}
      {/* </div> */}

      {/* </Router> */}
    </div>
  );
};

App.propTypes = {};

export default App;
