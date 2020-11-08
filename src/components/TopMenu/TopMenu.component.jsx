import { Menu } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { LOGOUT } from '../../store/auth/auth.actions'

import './TopMenu.styles.css'

const TopMenu = ({ selectedKey = 'Create Job' }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const logout = () => {
    dispatch(LOGOUT())
    history.push('/')
  }

  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={selectedKey}>
      <Menu.Item key="Create Job">
        <Link to="/recruiter/create-job">Create Job</Link>
      </Menu.Item>
      <Menu.Item key="Job List">Job List</Menu.Item>
      <Menu.Item style={{ float: 'right' }} onClick={logout}>
        Logout
      </Menu.Item>
    </Menu>
  )
}

export default TopMenu
