import React, { useState, useEffect, useRef } from "react";
import { Component } from "react";
import { connect } from "react-redux";

import {
  checkLevelTestUserSummary,
  fetchLevelTestUserSummaries,
  handleResponses,
} from "../../actions/level-test-user-summary";

const LevelTestUserSummary = (props) => {
  const typeOfText = useRef(null);
  const dateOfRealisation = useRef(null);

  function multiplicar(a,b){return a*b}
  const element = <h1>{ multiplicar(2,3)}</h1>



  useEffect(() => {
    props.fetchLevelTestUserSummaries();
  }, []);

  function handleChange(evt) {
    const value = evt.target.value;
    props.handleResponses(evt.target);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.checkLevelTestUserSummary();
  };


  return (
    <div>
{element} 
     <div className = "summaryTableOnScreen">
        <input type="text" ref={typeOfText}/>
        <input type="text" ref={dateOfRealisation}/>


      </div>

      {console.log("1 avant le KEY props = ", props)}
     
      {/* {console.log(" avant le KEY props.levelTestUserSummary.testsUserSummary = ", props.levelTestUserSummary.testsUserSummary)}; INDEFINIDO */}
      {/* {console.log(" avant le KEY props.testsUserSummary = ", props.testsUserSummary)}; Undefined*/}
      {/* {console.log(" avant le KEY props.levelTestUserSummaryByUser = ", props.levelTestUserSummaryByUser)};  INDEFINIDO*/}
      {/* {console.log("avant le KEY props.levelTestUserSummary.testsUserSummary = ", props.testsUserSummary.map[0])}; ERROR*/}

      <h1>Récapitulatif de votre progression</h1>

      <h2> Table récapitulatif de votre progression  </h2>
      <h5> &nbsp;&nbsp;&nbsp;type de test &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;date de réalisation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; note &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nombre de réponses correctes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nombre de réponses
        incorrectes
      </h5>
      {/* {props.levelTestUserSummary.testsUserSummary && props.levelTestUserSummaryByUser.map((valor, i) => {   */}
      {/* props.levelTestUserSummaryByUser.map((valor, i) => {  */}
      {props.levelTestUserSummary.testsUserSummary &&
          props.levelTestUserSummary.testsUserSummary.length && 
       props.levelTestUserSummary[0].map((v,i) => {

      /* {props.testsUserSummary.map((v, i) => { */
        {
          console.log("EN PROPS  = v ", v);
        }

        return (
          <div key={i}>
            {v.idUser}
            {v}
            {console.log("AVEC PROPS et KEY v.idUser  =  ", v.idUser)}
            {console.log("PROPS  =  ", props)}
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  // checkLevelTestUserSummary: (reponses, test) =>
  //   dispatch(checkLevelTestUserSummary(reponses, test)),
  checkLevelTestUserSummary: (reponsesSummaryy, testSummaryy) =>
    dispatch(checkLevelTestUserSummary(reponsesSummaryy, testSummaryy)),
  fetchLevelTestUserSummaries: () => dispatch(fetchLevelTestUserSummaries()),
  handleResponses: (event) => dispatch(handleResponses(event)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LevelTestUserSummary);
