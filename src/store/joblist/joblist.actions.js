import jobListTypes from "./joblist.types"


export const SET_JOBS = (jobs) => (
  {
    type: jobListTypes.SET_JOBS,
    jobs
  }
)