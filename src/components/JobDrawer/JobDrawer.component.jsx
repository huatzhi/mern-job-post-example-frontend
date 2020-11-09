import React from 'react'
import { Col, Divider, Drawer, Row } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import './JobDrawer.styles.css'
import DescriptionItem from '../DescriptionItem/DescriptionItem.component'
import { HIDE_JOB_DETAIL } from '../../store/jobDetails/jobDetails.actions'

const JobDrawer = () => {
  const { show, job } = useSelector((state) => state.jobDetail)
  const dispatch = useDispatch()

  const onClose = () => {
    dispatch(HIDE_JOB_DETAIL())
  }

  return (
    <>
      {show ? (
        <Drawer
          width={640}
          placement="right"
          closable={false}
          onClose={onClose}
          visible={show}
        >
          <p
            className="site-description-item-profile-p"
            style={{ marginBottom: 24 }}
          >
            <h2>{job.title}</h2>
          </p>
          <Row>
            <Col span={12}>
              <DescriptionItem
                title="Recruiter Name"
                content={job.recruiterName}
              />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Location" content={job.location} />
            </Col>
          </Row>
          <Divider />
          <p className="site-description-item-profile-p">Job Description</p>
          <Row>
            <Col span={24}>
              <DescriptionItem content={job.description} />
            </Col>
          </Row>

          <Divider />
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Job Post Date"
                content={job.createdAt ? String(new Date(job.createdAt)) : '-'}
              />
            </Col>
          </Row>
        </Drawer>
      ) : null}
    </>
  )
}

export default JobDrawer
