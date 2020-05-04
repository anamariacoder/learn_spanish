import * as types from "./../constants";

const initialState = {
  responses: {},
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
        responses: action.payload,
      };
    // case types.CHECK_LEVEL_TEST:
    //   return {
    //     ...state
    //   };
    default:
      return state;
  }
}
