import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { useDispatch } from 'react-redux'
import JobList from '../../components/JobList/JobList.component'
import { getList } from '../../store/joblist/joblist.actions'

const CandidatePage = () => {
  const { Header, Content, Footer } = Layout
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getList())
  })

  return (
    <>
      <Layout className="layout" style={{ minHeight: '100vh' }}>
        <Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/candidate">Candidate View Job</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <JobList />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Job App ©2020 Created by Someone
        </Footer>
      </Layout>
    </>
  )
}

export default CandidatePage
