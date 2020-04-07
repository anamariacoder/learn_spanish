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
} from "../../actions/level-test";
const isCorrect = (props) => {
  //   if (reponseUtilisateur === reponseCorrect) {
  //     return <Correct />;
  //   } else {
  //     return <NotCorrect />;
  //   }
};

const LevelTest = (props) => {
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
  };
  return (
    <div>
      <h1>Test et progrès</h1>
      <div>
        <div className="info-level-test">
          {props.levelTest.tests &&
            props.levelTest.tests.length &&
            props.levelTest.tests[0].questions.levelTests.map((q, i) => {
              return (
                <div key={i}>
                  <img src={q.image} alt="question" />
                  {q.question}
                  <select name={`question${i}`} onChange={handleChange}>
                    <option>Choissisez votre réponse</option>
                    {q.choix.map((c, i) => {
                      return <option key={i}>{c}</option>;
                    })}
                  </select>
                  {/* <isCorrect answer={answer} /> */}
                </div>
              );
            })}
        </div>
      </div>
      <button onClick={handleSubmit}>Valider</button>
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
