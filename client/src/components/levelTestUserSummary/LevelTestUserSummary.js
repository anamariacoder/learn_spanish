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
        {/* <h2> Table récapitulatif de votre progression </h2> */}
        <div className="info-level-test-user-summary">
          <table>
            {/* {props.testsUserSummary} */}
            <thead>
              <th>Type de test</th>
              <th>Code du test</th>     
              <th>Note obtenue</th>     
              <th>Nombre de questions répondus</th>  
              <th>Total réponses correctes</th>   
              <th>Total réponses incorrectes</th> 
              <th>Data </th>
            </thead>
            <tbody>
              {props.levelTestUserSummary.testUserSummaries.map((c, ind) => {
                return (
                  <tr key={ind}>
                    {/* <td> {c.idUser} </td> */}
                    <td> {c.idTypeTest} </td>
                    <td> {c.idLevelTest} </td>
                    <td> {c.note_user} </td>
                    <td> {c.total_questions_answered} </td>
                    <td> {c.total_correct_answers} </td>
                    <td> {c.total_wrong_answers} </td>
                    <td> {c.created_at} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

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
