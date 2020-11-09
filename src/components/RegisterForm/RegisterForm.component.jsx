import React from 'react'
import {
  Button,
  Form,
  Input,
  Tooltip,
  Modal,
  notification,
  Row,
  Col,
} from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'

import './RegisterForm.styles.css'
import requests from '../../services/requests'
import { Link, useHistory } from 'react-router-dom'

// styles constants
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
}

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
}

function registrationSuccessNotification(history) {
  Modal.success({
    title: 'Registration Success',
    content: (
      <div>
        <p>You can login now.</p>
      </div>
    ),
    onOk() {
      history.push('/recruiter/login')
    },
  })
}

function registrationErrorNotification(message) {
  notification.error({
    message: `Registration Error`,
    description: message,
    placement: 'bottomLeft',
  })
}

// components
const RegisterForm = () => {
  const { Item } = Form
  const [form] = Form.useForm()
  const history = useHistory()

  const onFinish = async (formData) => {
    console.log('formData:', formData)
    try {
      await requests.post('/recruiter/register', formData)
      form.resetFields()
      registrationSuccessNotification(history)
    } catch (e) {
      if (e && e.response && e.response.data && e.response.data.message) {
        registrationErrorNotification(e.response.data.message)
      } else {
        registrationErrorNotification('Unknown Error')
        console.error(e)
      }
    }
  }

  return (
    <Form
      {...formItemLayout}
      name="register"
      form={form}
      onFinish={onFinish}
      scrollToFirstError
    >
      <Item
        name="name"
        label={
          <span>
            Name&nbsp;
            <Tooltip title="What do you want others to call you?">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Please input your name!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Item>

      <Item
        name="email"
        label="Email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Item>

      <Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            min: 6,
            max: 30,
            message: 'Password have to be 6-30 characters',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Item>

      <Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject(
                'The two passwords that you entered do not match!'
              )
            },
          }),
        ]}
      >
        <Input.Password />
      </Item>

      <Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Item>
      <Row justify="center">
        <Col span={24}>
          Already have an account?{' '}
          <Button type="link">
            <Link to="/recruiter/login">Login Here</Link>
          </Button>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24}>
          <Button type="link">
            <Link to="/">Back To Home</Link>
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default RegisterForm
