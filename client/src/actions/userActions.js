import * as types from "../constants";
import axios from "axios";
import store from "../store/";

const apiBaseUrl = process.env.REACT_APP_BASE_API;
const Url = `${apiBaseUrl}/api/auth`;

export const checkToken = () => async dispatch =>{
  const state = store.getState();
  console.log("state", state);
  const res = await axios.get(Url);
  console.log("res", res);
  dispatch({
    type: types.CHECK_TOKEN,
    payload: res.data.uid
  });
  console.log("after", state);

};
