import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithubAlt,
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import AboutUs from "../aboutUs/AboutUs";
const Footer = () => {
  return (
    <div className="defineFooter">
      <p>&copy; 2020 Codé</p>

      <div className="about-us">
      <p><Link to="/AboutUs">Qui sommes-nous ?</Link></p>
      </div>

      <div className="contact-us">
        {/* <a>Contact :&nbsp;&nbsp;&nbsp;</a> */}
        Contact :&nbsp;&nbsp;&nbsp;
        {/* <li> */}
        <a
          href="mailto:anamadealmeida@gmail.com?Subject=Je%20suis%20intéressé%20par%20plus%20d'informations"
          target="_blank"
          rel="noopener"
        >
          <a>
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp;&nbsp;
          </a>
          anamadealmeida@gmail.com
        </a>
        {/* </li> */}
      </div>

      <div className="social-media">
        {/* <li> */}
        {/* <a>Nos réseaux :</a> */}
        Nos réseaux :{/* </li> */}
        <a href="http://linkedIn.com">
          {" "}
          <a className="linkedin">
            &nbsp;&nbsp;
            <a>
              <FontAwesomeIcon icon={faLinkedin} />
              <a href="http://linkedin.com"></a>
            </a>
          </a>
        </a>
        <a href="http://github.com">
          {" "}
          <a className="github">
            <a>
              &nbsp;&nbsp;
              <FontAwesomeIcon icon={faGithubAlt} />
              <a href="http://github.com"></a>
            </a>
          </a>
        </a>
        <a href="http://twitter.com">
          {" "}
          <a className="twitter">
            <a>
              {" "}
              &nbsp;&nbsp;
              <FontAwesomeIcon icon={faTwitter} />
              <a href="http://twitter.com/"></a>
            </a>
          </a>
        </a>
        <a href="http://instagram.com">
          {" "}
          <a className="instagram">
            <a>
              &nbsp;&nbsp;
              <FontAwesomeIcon icon={faInstagram} />
              <a href="http://twitter.com/"></a>
            </a>
          </a>
        </a>
        <a href="http://facebook.com">
          {" "}
          <a className="facebook">
            <a>
              &nbsp;&nbsp;
              <FontAwesomeIcon icon={faFacebook} />
              <a href="http://facebook.com/"></a>
            </a>
          </a>
        </a>
      </div>

      <li>
        <a href="https://cnnespanol.cnn.com">CNN Nouvelles en espagnol</a>
      </li>
    </div>
  );
};

export default Footer;
