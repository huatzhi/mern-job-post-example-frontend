import React from 'react'
import { Button, List } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { SHOW_JOB_DETAIL } from '../../store/jobDetails/jobDetails.actions'
import JobDrawer from '../JobDrawer/JobDrawer.component'
import { closeJob } from '../../store/joblist/joblist.actions'

const JobList = ({ recruiterList }) => {
  const dataSource = useSelector((state) => state.job.list)
  const dispatch = useDispatch()

  const showJob = (item) => {
    dispatch(SHOW_JOB_DETAIL(item))
  }

  const closeJobButtonClicked = (item) => {
    dispatch(closeJob(item._id))
  }

  const getListActions = (item) => {
    let listAction = [
      <Button
        type="link"
        onClick={() => {
          showJob(item)
        }}
      >
        View Job
      </Button>,
    ]

    if (recruiterList) {
      listAction.push(
        <Button
          type="danger"
          onClick={() => {
            closeJobButtonClicked(item)
          }}
        >
          Close
        </Button>
      )
    }

    return listAction
  }

  return (
    <>
      <List
        dataSource={dataSource}
        bordered
        renderItem={(item) => (
          <List.Item key={item.id} actions={getListActions(item)}>
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

export default JobList
