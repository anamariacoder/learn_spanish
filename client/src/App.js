import React, { useEffect } from "react";
//import PropTypes from "prop-types";
import { Provider } from "react-redux";
import LevelTest from "./components/level-test/LevelTest";
import Resources from "./components/resources/Resources";
import LearningMethodology from "./components/learningMethodology/LearningMethodology";
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
          
          
          
          {/* /* <div>
            <link
              rel="stylesheet"
              media="screen and (max-width: 640px)"
              href="smallscreen.css"
              type="text/css"
            />
            <link
              rel="stylesheet"
              media="(orientation:portrait)"
              href="portrait.css"
            />
            <link
              rel="stylesheet"
              media="(orientation:landscape)"
              href="paysage.css"
            />
          </div> */} 



          
          <NavBar />
          <Switch>
            <Route exact path="/" component={Accueil} />
            <Route path="/test" component={LevelTest} />
            <Route path="/resources" component={Resources} />
            <Route
              path="/learningMethodology"
              component={LearningMethodology}
            />
            <Route path="/sign" component={signFirebaseContainer} />

            <Route component={PageNotFound} />
          </Switch>
          <Footer></Footer>
        </Router>
      </Provider>
    </div>
  );
};

App.propTypes = {};

export default App;
