import jobDetailsTypes from "./jobDetails.types";

export const SHOW_JOB_DETAIL = (job) => ({
  type: jobDetailsTypes.SHOW_JOB_DETAIL,
  job
});

export const HIDE_JOB_DETAIL = () => ({
  type: jobDetailsTypes.HIDE_JOB_DETAIL
});