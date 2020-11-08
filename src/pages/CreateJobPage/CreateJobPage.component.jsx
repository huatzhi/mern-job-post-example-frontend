import { Layout } from 'antd'
import React from 'react'

import TopMenu from '../../components/TopMenu/TopMenu.component'

import './CreateJobPage.styles.css'

const { Header, Content, Footer } = Layout

const CreateJobPage = () => {
  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Header>
        <TopMenu />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <span>OK!</span>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Job App ©2020 Created by Someone
      </Footer>
    </Layout>
  )
}

export default CreateJobPage
