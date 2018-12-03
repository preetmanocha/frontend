import React from 'react'
import { Layout } from 'antd'

import styles from './index.less'

import logo from './images/jobhax-logo-white.svg'

const { Header, Content, Footer } = Layout

export default class App extends React.PureComponent {
  render() {
    const { children, navs } = this.props
    return (
      <Layout className={styles.appLayout}>
        <Header className={styles.header}>
          <img className={styles.logo} src={logo} alt="logo" />
          {navs}
        </Header>
        <Content className={styles.content}>
          {children}
        </Content>
        <Footer className={styles.footer}>
          COPYRIGHT ©2018 JOBHAX
        </Footer>
      </Layout>
    )
  }
}
