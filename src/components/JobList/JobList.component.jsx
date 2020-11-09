import React from 'react'
import { Button, List } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { SHOW_JOB_DETAIL } from '../../store/jobDetails/jobDetails.actions'
import JobDrawer from '../JobDrawer/JobDrawer.component'

const RecruiterJobList = () => {
  const dataSource = useSelector((state) => state.job.list)
  const dispatch = useDispatch()

  const showJob = (item) => {
    dispatch(SHOW_JOB_DETAIL(item))
  }

  return (
    <>
      <List
        dataSource={dataSource}
        bordered
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <Button
                type="link"
                onClick={() => {
                  showJob(item)
                }}
              >
                View Job
              </Button>,
            ]}
          >
            <List.Item.Meta
              title={item.title}
              description={`${item.recruiterName || ''} - ${
                item.location || ''
              }`}
            />
          </List.Item>
        )}
      />
      <JobDrawer />
    </>
  )
}

export default RecruiterJobList
