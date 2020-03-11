import { combineReducers } from "redux";

import authReducer from "./auth";
import levelTest from "./levelTest";

const reducers = combineReducers({ 
  userState:authReducer, 
  levelTest 
});

export default reducers;


