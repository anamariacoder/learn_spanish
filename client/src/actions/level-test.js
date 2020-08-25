import React from "react";
import * as types from "./../constants";
import Correct from "../components/test/Correct";
// import good from "../components/public/img/like.png"; /*AUJOURD'HUI 22 AVRIL */

let reponseCorrect = 0;
let reponseUtilisateur = 0;

console.log("actions de levelTest avant le fetchTest");

export const fetchTests = () => async (dispatch) => {
  fetch("/api/leveltest")
    .then((response) => {
      return response.json();
    })
    .then((tests) => {
      dispatch({ type: types.GET_LEVEL_TESTS, payload: tests });
    });
  // gèrer l'erreur avec .catch(error => console.log("recurso no encontrado"));
};
console.log("actions de levelTest après le fetchTest");
export const isCorrect = (props) => {
  if (reponseUtilisateur === reponseCorrect) return <Correct />;
};

export const checkLevelTest = () => async (dispatch, getState) => {
  let nbCorrect = 0;
  let nbAnswered = 0;
  let nbWrong = 0;
  let showResult = 0;
  let arrayTestResults = [];

  const responses = getState().levelTest.responses;
  const tests = getState().levelTest.tests;

  let keys = Object.keys(responses);
  keys.map((v, i) => {
    v = v.replace("question", "");

    let numBonneReponse = tests[0].questions.levelTests[v].answer;
    reponseCorrect = tests[0].questions.levelTests[v].choix[numBonneReponse]; //subindex of the correct answer
    reponseUtilisateur = responses[keys[i]];

    if (reponseUtilisateur === reponseCorrect) {
      nbCorrect += 1;
      nbAnswered += 1;
    } else {
      nbWrong += 1;
      nbAnswered += 1;
    }
  });

  arrayTestResults[0] = nbCorrect * 2;
  arrayTestResults[1] = nbCorrect;
  arrayTestResults[2] = nbWrong;
  console.log("18)  Number false answers ", arrayTestResults[2]);

  arrayTestResults[3] = 5 - (nbCorrect + nbWrong);

  arrayTestResults[4] = "Vous avez réussi le test. Félicitations !!!";

  switch (nbCorrect) {
    case 0:
    case 1:
    case 2:
      arrayTestResults[4] =
        "Nous vous encourageons à continuer à pratiquer et de reprendre le test.";
      break;
    case 3:
      arrayTestResults[4] = "Vous avez réussi votre test. Félicitations !!";
      break;
    case 4:
    case 5:
      arrayTestResults[4] =
        "Félicitations. Vous avez obtenu une excellente note. Bravo !!";
      break;
    default:
      arrayTestResults[4] =
        "Une erreur s’est produite avec votre test. Veuillez essayer de nouveau";
  }

  dispatch({
    type: types.CHECK_LEVEL_TEST,
    payload: arrayTestResults,
  });
};

export const handleResponses = (target) => async (dispatch, getState) => {
  const responses = getState().levelTest.responses;
  responses[target.name] = target.value;

  dispatch({
    type: types.HANDLE_RESPONSE,
    payload: responses,
  });
};
