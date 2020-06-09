
// import thunkMiddleware from "redux-thunk";

// import { createLogger } from "redux-logger";


// const loggerMiddleware = createLogger();


// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
// );



import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
