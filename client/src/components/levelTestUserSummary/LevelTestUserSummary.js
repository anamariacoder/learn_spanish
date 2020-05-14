import React, { useState, useEffect } from "react";
import { Component } from "react";
import { connect } from "react-redux";

import {
  checkLevelTestUserSummary,
  fetchLevelTestUserSummaries,
  handleResponses,
} from "../../actions/level-test-user-summary";

const LevelTestUserSummary = (props) => {
  console.log(" DANS LevelTestUserSummary props = ", props);
  // const { summaries } = props;
  // const listInformations = summaries.map((summary) => <li> {summary}</li>);
  // return <ul>{listInformations}</ul>;

  // const responsesSummary = props.responsesSummary;
  // const listInformations = responsesSummary.map((summary) => <li> {summary}</li>);
  // return <ul>{listInformations}</ul>;

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
      <h1>Récapitulatif de votre progression</h1>

      <div>
        {/* <div className="info-level-test-user-summary"> */}
        <h2> Table récapitulatif de votre progression </h2>
        <div className="info-level-test-user_summary">
          {props.testsUserSummary}
          {props.levelTestUserSummary.testUserSummaries.map((c, ind) => {
            return <div key={ind}>{c.idUser}</div>;
          })}
          
          {/* {props.levelTestUserSummary.testsUserSummary &&
            props.levelTestUserSummary.testsUserSummary.length &&
            props.levelTestUserSummary.testUserSSummary[0].note_user.levelTestUserSummariesByUser.map(
              (valor, ind) => {
                return (
                  <div>
                    {console.log(
                      "je suis DANS LEVEL TEST USER SUMMARY COMPONENT et valor est  : ",
                      props.levelTestUserSummary.testsUserSummary
                    )}
                    ;
                    <p>
                      {valor.idUser.map((c, ind) => {
                        console.log(
                          "je suis DANS LEVEL TEST USER SUMMARY COMPONENT"
                        );
                      })}
                    </p>
                    {/* return ({valor.idUser}); */}
          {/* </div>
                );
              }
            )} */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  checkLevelTestUserSummary: (reponses, test) =>
    dispatch(checkLevelTestUserSummary(reponses, test)),
  fetchLevelTestUserSummaries: () => dispatch(fetchLevelTestUserSummaries()),
  handleResponses: (event) => dispatch(handleResponses(event)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LevelTestUserSummary);
