import React from 'react'
import { Form, Input, Button, notification } from 'antd'

import './CreateJobForm.styles.css'
import requests from '../../services/requests'

const CreateJobForm = () => {
  const [form] = Form.useForm()

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
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default CreateJobForm
