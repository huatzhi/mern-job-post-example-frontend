import React from 'react'
import { Form, Input, Button, notification, Space } from 'antd'

import './CreateJobForm.styles.css'
import requests from '../../services/requests'
import { useDispatch, useSelector } from 'react-redux'
import { SHOW_JOB_DETAIL } from '../../store/jobDetails/jobDetails.actions'
import JobDrawer from '../JobDrawer/JobDrawer.component'

const CreateJobForm = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const { name } = useSelector((state) => state.auth)

  const onFinish = async (formData) => {
    console.log('formData', formData)
    try {
      await requests.post('/job/', formData)
      form.resetFields()
      notification.success({
        message: `Job create SUCCESSFUL!`,
        placement: 'bottomLeft',
      })
    } catch (e) {
      let errorMsg = 'Unknown Error'
      if (e && e.response && e.response.data && e.response.data.message) {
        errorMsg = e.response.data.message
      } else {
        console.error('Login error', e)
      }
      notification.error({
        message: 'Job creation FAILED!',
        description: errorMsg,
        placement: 'bottomLeft',
      })
    }
  }

  const preview = () => {
    let job = form.getFieldsValue()
    job.recruiterName = name
    dispatch(SHOW_JOB_DETAIL(job))
  }

  return (
    <>
      <Form form={form} name="create-job" onFinish={onFinish} layout="vertical">
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please input title!' }]}
        >
          <Input placeholder="(e.g. Software Engineer)" />
        </Form.Item>
        <Form.Item
          name="location"
          label="Location"
          rules={[{ required: true, message: 'Please input location!' }]}
        >
          <Input placeholder="(e.g. New York)" />
        </Form.Item>
        <Form.Item
          name="description"
          label="Job Description"
          rules={[{ required: true, message: 'Please input description!' }]}
        >
          <Input.TextArea
            placeholder="Insert your job description here."
            rows={20}
          />
        </Form.Item>
        <Space size="middle">
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="secondary" onClick={preview}>
              Preview
            </Button>
          </Form.Item>
        </Space>
      </Form>
      <JobDrawer />
    </>
  )
}

export default CreateJobForm
