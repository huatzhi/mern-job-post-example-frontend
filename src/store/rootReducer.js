import { combineReducers } from "redux"
import authReducer from "./auth/auth.reducer";
import jobListReducer from "./joblist/joblist.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  job: jobListReducer
});

export default rootReducer;