import React from "react";
import * as types from "./../constants";

export const fetchLevelTestUserSummaries = () => async (dispatch) => {
  fetch("/api/leveltestusersummary") // TO VERIFY
    .then((response) => {
      return response.json();
    })

    // .then((userSummaries) => {
    .then((testsUserSummary) => {
      dispatch({
        type: types.GET_LEVEL_TEST_USER_SUMMARIES,
        payload: testsUserSummary,
      });
    });
};

export const checkLevelTestUserSummary = () => async (dispatch, getState) => {
 
  const responses = getState().levelTestUserSummary.responses;
  const testsUserSummary = getState().levelTestUserSummary.testsUserSummary;

//   let keys = Object.keys(responses);
//  keys.map((v,i) => v=v.replace("noteuser",""));
 };

export const handleResponses = (target) => async (dispatch, getState) => {
  const responses = getState().fetchLevelTestUserSummaries.responses;
  responses[target.name] = target.value;
  dispatch({
    type: types.HANDLE_RESPONSE,
    payload: responses,
  });
};

// export default isCorrect;
