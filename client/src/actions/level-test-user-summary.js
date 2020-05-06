import React from "react";
import * as types from "./../constants";

export const fetchLevelTestUserSummaries = () => async (dispatch) => {
  fetch("/api/leveltestusersummary") // TO VERIFY
    .then((response) => {
      console.log("dans fetchLevelTestUserSummaries RETURNING response");

      return response.json();
    })

    // .then((userSummaries) => {
    .then((testsUserSummary) => {
      console.log("dans fetchLevelTestUserSummaries RETURNING testsUserSummary");

      dispatch({
        type: types.GET_LEVEL_TEST_USER_SUMMARIES,
        payload: testsUserSummary,
      });
      console.log("dans fetchLevelTestUserSummaries RETURNING testsUserSummary");

    });
};

export const checkLevelTestUserSummary = () => async (dispatch, getState) => {
  // const responses = getState().levelTestUserSummary.responses; 06 mai REPLACED responses BY responsesSummary

  const responsesSummary = getState().levelTestUserSummary.responsesSummary;
  const testsUserSummary = getState().levelTestUserSummary.testsUserSummary;

  //   let keys = Object.keys(responses);
  //  keys.map((v,i) => v=v.replace("noteuser",""));
};

export const handleResponses = (target) => async (dispatch, getState) => {
  // const responsesSummary = getState().fetchLevelTestUserSummaries.responsesSummary; REPLACED BY the next instruction placed below
  const responsesSummary = getState().levelTestUserSummaries.responsesSummary;

  responsesSummary[target.name] = target.value;
  dispatch({
    type: types.HANDLE_RESPONSE,
    payload: responsesSummary,
  });
  console.log("esponsesSummary ", responsesSummary);

};

// export const handleResponses = (target) => async (dispatch, getState) => {
//   const responses = getState().fetchLevelTestUserSummaries.responses;
//   responses[target.name] = target.value;
//   dispatch({
//     type: types.HANDLE_RESPONSE,
//     payload: responses,
//   });
// };
// export default isCorrect;
