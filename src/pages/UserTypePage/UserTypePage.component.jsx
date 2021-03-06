import { Button, Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

import './UserTypePage.styles.css'

const UserTypePage = () => {
  return (
    <Row
      gutter={[16, 16]}
      type="flex"
      justify="space-around"
      align="middle"
      className="full-vh"
    >
      <Col span={11}>
        <Link to="/candidate">
          <Button className="user-type-button full-screen-row">
            <span>Candidate</span>
          </Button>
        </Link>
      </Col>
      <Col span={11}>
        <Link to="/recruiter/login">
          <Button className="user-type-button full-screen-row">
            <span>Recruiter</span>
          </Button>
        </Link>
      </Col>
    </Row>
  )
}

export default UserTypePage
