import React from 'react'
import CreateJobForm from '../../components/CreateJobForm/CreateJobForm.component'
import RecruiterLayout from '../../components/RecruiterLayout/RecruiterLayout.component'

import './CreateJobPage.styles.css'

const CreateJobPage = () => {
  return (
    <RecruiterLayout selectedKey="Create Job">
      <CreateJobForm />
    </RecruiterLayout>
  )
}

export default CreateJobPage
