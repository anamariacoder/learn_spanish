// **2** 17 juin
import * as types from "./../constants";

const initialState = {
  isAuth: false,
  user: {},
};
console.log("authReducer");
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isAuth: false,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: action.payload ? true : false,
        user: action.payload,
      };
      case types.LOGOUT_REQUEST:
        return {
          ...state,
          isAuth: false,
          user: {}
        };
    case types.REGISTER_REQUEST:
      return {
        ...state,
        isAuth: false,
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isAuth: action.payload ? true : false,
        user: action.payload,
      };
      case types.DELETE_REQUEST:
        return {
          ...state
        };
      case types.DELETE_SUCCESS:
        return {
          ...state,
          isAuth: false,
          user: action.payload,
        };
    default:
      return state;
  }
}
