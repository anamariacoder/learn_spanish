import React, { useState, useEffect } from "react";
import { Component } from "react";
import { connect } from "react-redux";

import {
  checkLevelTestUserSummary,
  fetchLevelTestUserSummaries,
  handleResponses,
} from "../../actions/level-test-user-summary";

const LevelTestUserSummary = (props) => {
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
      {console.log("1 avant le KEY props = ", props)}
      {/* {console.log("2 avant le KEY props.levelTestUserSummary.testsUserSummary = ", props.levelTestUserSummary.testsUserSummary)}; INDEFINIDO */}
      {/* {console.log("3 avant le KEY props.testsUserSummary = ", props.testsUserSummary)}; Undefined*/}
      {/* {console.log("4 avant le KEY props.levelTestUserSummaryByUser = ", props.levelTestUserSummaryByUser)};  INDEFINIDO*/}
      {/* {console.log("avant le KEY props.levelTestUserSummary.testsUserSummary = ", props.testsUserSummary.map[0])}; ERROR*/}

      <h1>Récapitulatif de votre progression</h1>

      <h2> Table récapitulatif de votre progression </h2>

      {/* {props.levelTestUserSummary.testsUserSummary && props.levelTestUserSummaryByUser.map((valor, i) => {   */}
      {/* props.levelTestUserSummaryByUser.map((valor, i) => {  */}
      {/* {props.levelTestUserSummary.testsUserSummary &&
          props.levelTestUserSummary.testsUserSummary.length && */}
      {/* { props.levelTestUserSummary.testsUserSummary.map((v,i) => { */}

      {props.testsUserSummary.map((v, i) => {
        {
          console.log("EN PROPS  = v ", v);
        }
        
          return (
          <div key={i}>
            {v.idUser}
            {v}
            {console.log("EN KEY v.idUser  =  ", v.idUser)}
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
