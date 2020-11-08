import { Col, Row } from 'antd'
import React from 'react'
import RegisterForm from '../../components/RegisterForm/RegisterForm.component'

import './RecruiterRegistrationPage.styles.css'

const RecruiterRegistrationPage = () => {
  return (
    <Row type="flex" justify="space-around" align="middle" className="full-vh">
      <Col
        xs={{ span: 24 }}
        sm={{ span: 12 }}
        lg={{ span: 8 }}
        xl={{ span: 6 }}
      >
        <RegisterForm />
      </Col>
    </Row>
  )
}

export default RecruiterRegistrationPage
