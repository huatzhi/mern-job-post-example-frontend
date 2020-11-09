import React from 'react'

import './RecruitmentLayout.styles.css'

import TopMenu from '../TopMenu/TopMenu.component'
import { Layout } from 'antd'

const { Header, Content, Footer } = Layout

const RecruiterLayout = ({ selectedKey = 'Create Job', children }) => {
  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Header>
        <TopMenu selectedKey={selectedKey} />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Job App ©2020 Created by Someone
      </Footer>
    </Layout>
  )
}

export default RecruiterLayout
