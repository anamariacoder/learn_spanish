import * as types from "./../constants";

export const fetchTests = () => async dispatch => {
  fetch("/api/leveltest")
    .then(response => {
      return response.json();
    })
    .then(tests => {
      dispatch({ type: types.GET_LEVEL_TESTS, payload: tests });
    });
};

export const checkLevelTest = () => async (dispatch, getState) => {
  let nbCorrect = 0;
  let nbAnswered = 0;
  let nbWrong = 0;
  const responses = getState().levelTest.responses;
  const tests = getState().levelTest.tests;
  let keys = Object.keys(responses);
  keys.map((v, i) => {
    v = v.replace("question", "");
    let numBonneReponse = tests[0].questions.levelTests[v].answer;
    let reponseCorrect =
      tests[0].questions.levelTests[v].choix[numBonneReponse]; //subindex of the correct answer
    let reponseUtilisateur = responses[keys[i]];
    if (reponseUtilisateur === reponseCorrect) {
      nbCorrect += 1;
      nbAnswered += 1;
    } else {
      nbWrong += 1;
      nbAnswered += 1;
    }

    // console.log("1 Number correct answers ", nbCorrect);
    // console.log("2 Number false answers ", nbWrong); // Quantité de mauvaises réponses
    // console.log("3 Nombre de questions répondues :", nbAnswered);
  // fetch POST => nbCorrect, => nouvelle route server qui insert les data

  });

  console.log("1 Number correct answers ", nbCorrect);
  console.log("2 Number false answers ", nbWrong); // Quantité de mauvaises réponses
  console.log("3 Nombre de questions répondues :", nbAnswered);


};



export const handleResponses = target => async (dispatch, getState) => {
  const responses = getState().levelTest.responses;
  responses[target.name] = target.value;
  dispatch({
    type: types.HANDLE_RESPONSE,
    payload: responses
  });
};

