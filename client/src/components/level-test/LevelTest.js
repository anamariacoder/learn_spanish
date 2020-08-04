import React, { useState, useEffect } from "react";
import good from "./../public/img/like.png";
import bad from "./../public/img/dislike.png";
import Correct from "../test/Correct";
import NotCorrect from "../test/NotCorrect";
import { connect } from "react-redux";
import {
  checkLevelTest,
  fetchTests,
  handleResponses,
  // reponseCorrect,
  // reponseUtilisateur
} from "../../actions/level-test";

// const isCorrect = (props) => {
//   if (reponseUtilisateur === reponseCorrect) return <Correct />;
// };
//   // } else {
//   //   return <NotCorrect />;
//   // }

const LevelTest = (props) => {
  const [hasSubmit, setSubmit] = useState(false);
  const { resultats } = props.levelTest;
  useEffect(() => {
    props.fetchTests();
  }, []);
  function handleChange(evt) {
    const value = evt.target.value;
    props.handleResponses(evt.target);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    props.checkLevelTest();
    setSubmit(true);
  };

  return (
    <div>
      <h1>Test global</h1>
      <div>
        <div className="info-level-test">
          {props.levelTest.tests &&
            props.levelTest.tests.length &&
            props.levelTest.tests[0].questions.levelTests.map((q, i) => {
              return (
                <div key={i}>
                  <img
                    className="fit-image-level-test"
                    src={q.image}
                    alt="question"
                  />
                  {q.question}
                  <select name={`question${i}`} onChange={handleChange}>
                    <option>Choissisez votre réponse</option>
                    {q.choix.map((c, i) => {
                      return <option key={i}>{c}</option>;
                    })}
                  </select>
                </div>
              );
            })}
        </div>
      </div>

      <div className="submit-test-button">
        <button onClick={handleSubmit}>
          <div className="test-button">Soumettre</div>
        </button>
      </div>
      {hasSubmit ? (
        <div>
          <h6>Vos résultats</h6>
          <div className="info-level-test-results">
            <table>
              <thead>
                <th>Note obtenue sur dix points</th>
                <th>Total des bonnes réponses</th>
                <th>Total des mauvaises réponses</th>
                <th>Total des questions restées sans réponse</th>
                <th>Observations</th>
              </thead>
              <tbody>
                <td> {resultats[0]} </td>
                <td> {resultats[1]} </td>
                <td> {resultats[2]} </td>
                <td> {resultats[3]} </td>
                <td> {resultats[4]} </td>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="text-submit-test-button">
          <p3>
            <p>
              Cliquez sur le bouton ci-dessus pour voir une synthèse de vos
              résultats
            </p>
          </p3>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state, props) => {
  return state;
};
const mapDispatchToProps = (dispatch) => ({
  checkLevelTest: (reponses, test) => dispatch(checkLevelTest(reponses, test)),
  fetchTests: () => dispatch(fetchTests()),
  handleResponses: (event) => dispatch(handleResponses(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LevelTest);
