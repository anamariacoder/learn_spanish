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
import Home from "./components/home/Home";
import "./App.css";
import AboutUs from "./components/about-us/AboutUs";
import store from "./store";
import SignFirebase from "./components/user/SignFirebase";
import signFirebaseContainer from "./containers/signFirebaseContainer";
import ProgressGlobal from "./components/progressGlobal/Progress1";
import Progress1 from "./components/progressGlobal/Progress1";

const App = props => {
  console.log(props);
  useEffect(() => {}, []);
  return (
    <div>
      
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
            <Route path="/progressGlobal" component={Progress1} />
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

      <footer>
        <div className="define">
          <p>&copy; 2020 Codé</p>

          <ul>
            <li>{<a href="/a">Qui sommes-nous ?</a>}</li>
            <li>
              <p>Contact :</p>
              <a href="/conectar"> anamadealmeida@gmail.com</a>
            </li>
            <li>
              <a href="/rrss">Nos réseaux :</a>
              {
                /*  */
                <div className="column has-text-right">
                  <a className="icon" href="#">
                    <i className="fab fa-instagram-square"></i>
                  </a>
                  <a className="icon" href="#">
                    <i className="fa-twitter"></i>
                  </a>
                </div>
                /*  */
              }
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

App.propTypes = {};

export default App;
