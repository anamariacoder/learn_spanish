// import React, { useState, useEffect } from "react";
import React, { useEffect } from "react";

// import { Component } from "react";
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
   // const value = evt.target.value;
    props.handleResponses(evt.target);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.checkLevelTestUserSummary();
  };
  let dateFormated = null;
  let dateLocal,
    day, hours = null;
  let m = null;
  let y = null;
  function formateDate(originalDate, n) {
    var d = new Date(originalDate);
    day = d.getDate();
    m = d.getMonth() + 1;
    y = d.getFullYear();

hours = d.getHours();

    dateLocal = d.toLocaleDateString() + " - " + d.toLocaleTimeString();
    // fecha2 = d + "-" + m + "-" + y;
    dateFormated = dateLocal;
    console.log("d : ", d);
    console.log("m : ", m);
    console.log("y : ", y);
    console.log("day : ", day);
  }

  return (
    <div>
      <h1>Récapitulatif de votre progression</h1>

      <div>
        <div className="info-level-test-user-summary">
          <table>
            <thead>
              <th>Type de test</th>
              {/* <th>Code du test</th> */}
              <th>Note obtenue</th>
              <th>Nombre de questions répondues</th>
              <th>Nombre de réponses correctes</th>
              <th>Nombre de réponses incorrectes</th>
              <th>Date</th>
            </thead>
            <tbody>
              {props.levelTestUserSummary.testUserSummaries.map((c, ind) => {
                return (
                  <tr key={ind}>
                    <script>{formateDate(c.created_at, dateFormated)}</script>

                    {/* <td> {c.idUser} </td> */}
                    {/* <td> {c.idTypeTest} </td>
                    <td> {c.idLevelTest} </td> */}
                    <td> {"Test de Niveau N°1"} </td>
                    <td> {c.note_user} </td>
                    <td> {c.total_questions_answered} </td>
                    <td> {c.total_correct_answers} </td>
                    <td> {c.total_wrong_answers} </td>
                    {/* <div> {dateFormated(c.created_at)} </div> */}
                    <td>{dateFormated}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
