import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { notification } from 'antd'
import JobList from '../../components/JobList/JobList.component'
import RecruiterLayout from '../../components/RecruiterLayout/RecruiterLayout.component'
import requests from '../../services/requests'
import { SET_JOBS } from '../../store/joblist/joblist.actions'

import './RecruiterJobListPage.styles.css'

const RecruiterJobListPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    ;(async () => {
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
    })()
  })

  return (
    <RecruiterLayout selectedKey="Job List">
      <JobList />
    </RecruiterLayout>
  )
}

export default RecruiterJobListPage
