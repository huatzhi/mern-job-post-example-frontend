import jobDetailsTypes from "./jobDetails.types";

const initialState = {
  job: {},
  show: false
};

const jobDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case jobDetailsTypes.SHOW_JOB_DETAIL:
      return { ...state, job: action.job, show: true };
    case jobDetailsTypes.HIDE_JOB_DETAIL:
      return { ...state, show: false };
    default:
      return state;
  }
}

export default jobDetailsReducer;