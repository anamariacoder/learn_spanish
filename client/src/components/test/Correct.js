import React, { useState, useEffect } from "react";
import good from "./../public/img/like.png";

const Correct = (props) => {
  //  useEffect(() => {
  //    props.fetchTests();
  // }, []);

  // function handleChange(evt) {       18 mai
  //   const value = evt.target.value;
  //   props.handleResponses(evt.target);
  // }

  //const handleSubmit = (event) => {  18 mai
  //  event.preventDefault();
  //  // props.checkLevelTest();
  //};

  //  aujourd'hui 22 avril
  // return <div className="iconTest">
  // {console.log("Just DANS LE return de CORRECT")}
  //  <p>GOOD ANSWER</p></div>;

  console.log("Je suis dans COMPONENTS/test/CORRECT.js");

  return (
    // <div>
    //   <img className="iconTest" src={good} alt="thumbs up" />
    // </div>
    <div>
      <img className="iconTest" />
    </div>
  );
};

export default Correct;
