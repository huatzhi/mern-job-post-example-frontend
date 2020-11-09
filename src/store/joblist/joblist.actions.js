import { notification } from "antd"
import requests from "../../services/requests"
import jobListTypes from "./joblist.types"


export const SET_JOBS = (jobs) => (
  {
    type: jobListTypes.SET_JOBS,
    jobs
  }
)

export const getRecruiterList = () => {
  return async dispatch => {
    try {
      const getjob = await requests.get('/recruiter/job')
      const jobs = getjob.data || []
      dispatch(SET_JOBS(jobs))
    } catch (e) {
      let errorMsg = 'Unknown Error'
      if (e && e.response && e.response.data && e.response.data.message) {
        errorMsg = e.response.data.message
      } else {
        console.error('Login error', e)
      }
      notification.error({
        message: `Get Recruiter Job Error`,
        description: errorMsg,
        placement: 'bottomLeft',
      })
      dispatch(SET_JOBS([]))
    }
  }
}

export const closeJob = jobObjId => {
  return async dispatch => {
    try {
      await requests.post('/job/close', { jobObjId })
    } catch (e) {
      let errorMsg = 'Unknown Error'
      if (e && e.response && e.response.data && e.response.data.message) {
        errorMsg = e.response.data.message
      } else {
        console.error('Login error', e)
      }
      notification.error({
        message: `Close Job Failed`,
        description: errorMsg,
        placement: 'bottomLeft',
      })
    } finally {
      dispatch(getRecruiterList())
    }
  }
}