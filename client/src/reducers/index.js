import { combineReducers } from "redux";
import auth from "./auth";
import levelTest from "./levelTest";

const reducers = combineReducers({ auth, levelTest });

export default reducers;
