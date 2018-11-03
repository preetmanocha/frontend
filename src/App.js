import React from 'react'
import { Layout } from 'antd'

import styles from './index.less'

const { Header, Content, Footer } = Layout

export default class App extends React.PureComponent {
  render() {
    const { children, navs } = this.props
    return (
      <Layout className={styles.appLayout}>
        <Header className={styles.header}>
          <div className={styles.logo} />
          {navs}
        </Header>
        <Content className={styles.content}>
          {children}
        </Content>
        <Footer className={styles.footer}>
          COPYRIGHT ©2018 ERRORCV
        </Footer>
      </Layout>
    )
  }
}
