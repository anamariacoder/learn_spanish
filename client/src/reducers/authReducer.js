
// **2** 17 juin
import * as types from "./../constants";

// export default function auth(state = initialState, action) {
//   switch (action.type) {
//     case types.CHECK_TOKEN:
//       return {
//         ...state,
//         isAuth:action.payload ? true : false,
//         user: action.payload

//       };
//     default:
//       return state;
//   }
// }

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isAuth: false,
        isLoading: true,
      };
    case types.LOGIN_SUCESS:
      return {
        ...state,
        isAuth: action.payload ? true : false,
        user: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
