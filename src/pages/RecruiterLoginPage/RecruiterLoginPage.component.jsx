import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm.component'
import { Col, Row } from 'antd'

import './RecruiterLoginPage.styles.css'

const RecruiterLoginPage = () => {
  return (
    <Row type="flex" justify="space-around" align="middle" className="full-vh">
      <Col
        xs={{ span: 24 }}
        sm={{ span: 12 }}
        lg={{ span: 8 }}
        xl={{ span: 6 }}
      >
        <LoginForm />
      </Col>
    </Row>
  )
}

export default RecruiterLoginPage
