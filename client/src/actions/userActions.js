// **1** 17 juin
import * as types from "../constants";
import axios from "axios";
// import store from "../store/";
const apiBaseUrl = process.env.REACT_APP_BASE_API;
const Url = `${apiBaseUrl}/api/users/login`;

// export const logIn = (user) => async (dispatch) => {  // 
export const logIn = (user, password) => async (dispatch) => {
  dispatch({
    type: types.LOGIN_REQUEST,
  });
  const response = await axios.post(Url, user);
  const { userInfo } = response;
  dispatch({
    type: types.LOGIN_SUCESS,
    payload: userInfo,
  });
};

