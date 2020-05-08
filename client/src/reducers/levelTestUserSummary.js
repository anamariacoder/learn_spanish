import * as types from "./../constants";

const initialState = {
  // responses: {}, 8 mai 2020
  responsesSummary: {},
  testUserSummaries: [],
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.GET_LEVEL_TEST_USER_SUMMARIES:
      return {
        ...state,
        testUserSummaries: action.payload,
      };
    case types.HANDLE_RESPONSE:
      return {
        ...state,
        responsesSummary: action.payload,
      };
    // case types.CHECK_LEVEL_TEST:
    //   return {
    //     ...state
    //   };
    default:
      return state;
  }
}
