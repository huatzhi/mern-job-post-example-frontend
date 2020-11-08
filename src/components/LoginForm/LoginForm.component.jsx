import React from 'react'
import { Form, Input, Button, Modal } from 'antd'
import './LoginForm.styles.css'
import { useDispatch } from 'react-redux'

import requests from '../../services/requests'
import { useHistory } from 'react-router-dom'
import { LOGIN_SUCCESS } from '../../store/auth/auth.actions'

// styles
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

// component
const LoginForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const onFinish = async (values) => {
    console.log('Success:', values)
    try {
      let output = await requests.post('/recruiter/login', values)
      console.log(output.data)
      if (!output || !output.data || !output.data.name || !output.data.token) {
        throw new Error('Unknown error')
      }
      const { name, token } = output.data

      dispatch(LOGIN_SUCCESS(name, token))
      history.push('/recruiter/job-list')
    } catch (e) {
      let errorMsg = 'Unknown Error'
      if (e && e.response && e.response.data && e.response.data.message) {
        errorMsg = e.response.data.message
      } else {
        console.error('Login error', e)
      }

      Modal.error({
        title: 'Login Failed',
        content: (
          <div>
            <p>{errorMsg}</p>
          </div>
        ),
      })
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please input your email!' },
          {
            type: 'email',
            message: 'Must be a valid email address!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
