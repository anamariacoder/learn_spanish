import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Bootstrap from "bootstrap";
import AboutUs from "../aboutUs/AboutUs";
const Footer = () => {
  return (
    // <div className="footer-container">
    <div className="defineFooter">
      <p>&copy; 2020 Codé</p>
      
      import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

    
      
      {/* <script                                           EFACER
          src="https://kit.fontawesome.com/8340b5561f.js"
          crossOrigin="anonymous"
        ></script> */}

      <div className="about-us">
        <Link to="/AboutUs">Qui sommes-nous ?</Link>
      </div>





      <div className="contact-us">
        <li>
          <a>Contact :&nbsp;&nbsp;&nbsp;</a>
          <a
            href="mailto:anamadealmeida@gmail.com?Subject=Je%20suis%20intéressé%20par%20plus%20d'informations"
            target="_blank"
            rel="noopener"
          >
            anamadealmeida@gmail.com
          </a>
        </li>
      </div>

      <div className="social-media">
        <li>
          <a href="/components/socialMedia/SocialMedia">Nos réseaux :</a>
        </li>
        {/* <button type="button" className="btn btn-sm btn-fb"><i className="fab fa-facebook-f pr-1"></i> Facebook</button> */}
        {/* <a href="http://instagram.com/_u/@anamadealmeida/"> */}
       
        <a href="http://instagram.com/"> <a className="ins-ic mr-3" role="button"><i className="fab fa-lg fa-instagram"></i></a> 
        
          {/* Our instagram &nbsp;&nbsp;&nbsp; */}
          {/* <i className="fab fa-instagram"></i> */}

          
        </a>
        {/* <a href="http://instagram.com/_u/{anamadealmeida}/">Link to Instagram Page</a> */}
        <a
          href="https://twitter.com/messages/compose?recipient_id=Ana&ref_src=twsrc%5Etfw"
          className="twitter-dm-button"
          data-screen-name="@anamadealmeida"
          data-show-count="false"
        >
        Our twitter @anamadealmeida
        </a>
        {/* <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script> */}
<button type="button" className="btn btn-tw"><i className="fab fa-twitter pr-1"></i> Twitter</button>


        {/* <span className="fa-stack fa-lg">
          <i className="fa fa-circle-thin fa-stack-2x"></i>
          <i className="fa fa-twitter fa-stack-1x"></i>
        </span> */}
        
      </div>

      <li>
        <a href="https://cnnespanol.cnn.com"> Nouvelles en espagnol</a>
      </li>

      {/* <footer className="footer is-primary">
        <div className="container">
          <div className="columns">
            <div className="column">
              <p>Nous contacter</p>
            </div>
            <div className="column has-text-right">
              <a className="icon" href="#">
                <i class="fab fa-instagram-square"></i>
              </a>
              <a className="icon" href="#">
                <i className="fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};
export default Footer;


