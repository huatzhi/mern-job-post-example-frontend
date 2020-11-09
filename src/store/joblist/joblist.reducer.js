import jobListTypes from "./joblist.types";

const initialState = {
  list: []
};

const jobListReducer = (state = initialState, action) => {
  switch (action.type) {
    case jobListTypes.SET_JOBS:
      return { ...state, list: action.jobs };
    default:
      return state;
  }
}

export default jobListReducer;