import { combineReducers } from "redux"
import authReducer from "./auth/auth.reducer";
import jobListReducer from "./joblist/joblist.reducer";
import jobDetailsReducer from "./jobDetails/jobDetails.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  job: jobListReducer,
  jobDetail: jobDetailsReducer
});

export default rootReducer;