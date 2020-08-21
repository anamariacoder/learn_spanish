import * as types from "./../constants";

const initialState = {
  responses: {},
  tests: [],
  resultats: [],
  validateCorrect: []
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    
    case types.GET_LEVEL_TESTS:
      return {
        ...state,
        tests: action.payload
      };
    case types.HANDLE_RESPONSE:
      return {
        ...state,
        responses: action.payload
      };
    case types.CHECK_LEVEL_TEST:
      return {
        ...state,
        resultats: action.payload
      };
    default:
      return state;
  }
}
