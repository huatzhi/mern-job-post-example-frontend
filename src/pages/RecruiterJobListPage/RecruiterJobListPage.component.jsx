import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import JobList from '../../components/JobList/JobList.component'
import RecruiterLayout from '../../components/RecruiterLayout/RecruiterLayout.component'
import { getRecruiterList } from '../../store/joblist/joblist.actions'

import './RecruiterJobListPage.styles.css'

const RecruiterJobListPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecruiterList())
  })

  return (
    <RecruiterLayout selectedKey="Job List">
      <JobList recruiterList />
    </RecruiterLayout>
  )
}

export default RecruiterJobListPage
